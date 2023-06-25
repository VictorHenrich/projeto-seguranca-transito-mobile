import {useState, useEffect} from "react";

import { Center, IconButton, Icon, Stack, Image, Video } from 'native-base';
import { Camera, PermissionResponse, CameraType, CameraCapturedPicture } from 'expo-camera';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";


type CameraType = "video" | "photo"

type CameraPosition = "front" | "back"


export interface CameraStateProps{
    buttonRecordPressed: boolean,
    cameraPosition: CameraPosition,
    cameraType: CameraType,
    cameraRef: null | Camera
}


export default function CameraComponent(props: any){
    const [cameraPayload, setCameraState] = useState<CameraStateProps>({
        buttonRecordPressed: false,
        cameraPosition: "back",
        cameraType: "photo",
        cameraRef: null
    });
    const [photosPicked, setPhotosPicked] = useState<CameraCapturedPicture[]>([]);
    const [videosPicked, setVideosPicked] = useState<Pick<CameraCapturedPicture, "uri">[]>([]);


    useEffect(()=>{
        requestCameraPermission();
    }, [])


    async function requestCameraPermission(){
        try{
            const responsePermissionCamera: PermissionResponse = await Camera.requestCameraPermissionsAsync();

            const responsePermissionAudio: PermissionResponse = await Camera.requestMicrophonePermissionsAsync();

            if(!responsePermissionCamera.status)
                throw new Error("Acesso ao audio negado!");

            if(!responsePermissionAudio.status)
                throw new Error("Acesso a camera negada!");

        }catch(error){
            throw new Error("Falha ao solicitar permissão da camera!");
        }
        
    }

    async function capturePhoto(){
        if(!cameraPayload.cameraRef) return;

        const newPhoto: CameraCapturedPicture  = await cameraPayload.cameraRef.takePictureAsync({ scale: 1 });

        setPhotosPicked([...photosPicked, newPhoto ]);
    }

    async function startingVideo(){
        if(!cameraPayload.cameraRef) return;

        const newVideo: Pick<CameraCapturedPicture, "uri"> = await cameraPayload.cameraRef.recordAsync({ quality: 720 });

        setVideosPicked([...videosPicked, newVideo]);
    }

    async function stopingVideo(){
        if(!cameraPayload.cameraRef) return;

        await cameraPayload.cameraRef.stopRecording()
    }

    
    function setButtonRecordPress(pressed: boolean){
        setCameraState({
            ...cameraPayload,
            buttonRecordPressed: pressed
        });
    }

    function setCameraType(type: CameraType){
        setCameraState({
            ...cameraPayload,
            cameraType: type
        });
    }

    function setCameraPosition(position: CameraPosition){
        setCameraState({
            ...cameraPayload,
            cameraPosition: position
        });
    }

    function setCameraRef(ref: Camera | null){
        setCameraState({
            ...cameraPayload,
            cameraRef: ref
        })
    }

    return (
        <Camera
            type={cameraPayload.cameraPosition === "back" ? CameraType.back : CameraType.front}
            style={{
                height: "100%",
                width: "100%",
                position: "absolute"
            }}
            ref={(cameraRef) => {
                if(!cameraPayload.cameraRef && cameraRef)
                    setCameraRef(cameraRef);
            }}
        >
            <Stack 
                width="full"
                height="full"
                justifyContent="flex-end"
                paddingBottom={10}
                space={20}
            >
                <Stack
                    width="full"
                    direction="row"
                    justifyContent="flex-start"
                >
                    {photosPicked.length || videosPicked.length ? (
                        <Center
                            width={100}
                            height={100}
                            padding={2}
                            borderRadius={20}
                            backgroundColor="primary"
                            overflow="hidden"
                        >
                            {
                                photosPicked.length ? (
                                    <Image 
                                        source={{
                                            uri: photosPicked[photosPicked.length - 1].uri
                                        }}

                                        width="100%"
                                        height="100%"
                                        alt="myphoyo"
                                    />
                                ) : videosPicked.length ? (
                                    <Image 
                                        source={{
                                            uri: videosPicked[videosPicked.length - 1].uri
                                        }}

                                        width="100%"
                                        height="100%"
                                        alt="myphoyo"
                                    />
                                ) : null
                            }
                        </Center>
                    ) : null}
                </Stack>
                <Stack
                    width="full"
                    direction="row"
                    justifyContent="space-around"
                >   
                    <IconButton 
                        icon={
                            <Icon 
                                as={<FontAwesome5 name={cameraPayload.cameraType == "photo" ? "camera" : "video"}/>}
                                size="xl"
                                color="primary"
                            />
                        }
                        backgroundColor="secondary"
                        borderRadius="full"
                        onTouchStart={() => {

                            const type: CameraType = cameraPayload.cameraType === "photo" ? "video" : "photo"

                            setCameraType(type);
                        }}
                        padding={5}
                    />
                    <IconButton
                        backgroundColor={cameraPayload.buttonRecordPressed ? "primary" : "secondary"}
                        borderRadius="full"
                        onPressIn={() =>{
                            setButtonRecordPress(true);

                            if(cameraPayload.cameraType === "photo")
                                capturePhoto();

                            if(cameraPayload.cameraType === "video")
                                startingVideo();
                        }}
                        onPressOut={()=> {
                            setButtonRecordPress(false);

                            if(cameraPayload.cameraType === "video")
                                stopingVideo();
                        }}
                        padding={5}
                    />
                    <IconButton 
                        icon={
                            <Icon 
                                as={<Entypo name="cycle"/>}
                                size="xl"
                                color="primary"
                            />
                        }
                        backgroundColor="secondary"
                        borderRadius="full"
                        padding={5}
                        onTouchStart={() => {

                            const position: CameraPosition = cameraPayload.cameraPosition === "back" ? "front" : "back"

                            setCameraPosition(position);
                        }}
                    />
                </Stack>
            </Stack>
        </Camera>
    )
}
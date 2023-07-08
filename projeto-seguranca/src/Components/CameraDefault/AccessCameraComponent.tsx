import {useState, useEffect, useContext, memo} from "react";

import { Center, IconButton, Icon, Stack, Image } from 'native-base';
import { Camera, CameraType, CameraCapturedPicture, FlashMode } from 'expo-camera';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CameraUtils, { CameraStateProps, CameraComponentPosition, CameraComponentType } from "./CameraUtils";
import { ContextCamera, IContextCamera, MediaTypes } from "./CameraProvider";



function AccessCameraComponent(props: any){
    const {
        addMedia,
        medias
    }: IContextCamera = useContext(ContextCamera);

    const [cameraPayload, setCameraPayload] = useState<CameraStateProps>({
        buttonRecordPressed: false,
        flashActivated: false,
        cameraPosition: "back",
        cameraType: "photo",
        cameraRef: null
    });

    useEffect(()=> {
        CameraUtils.requestCameraPermission();
    }, []);

    async function handleCapturePhoto(){
        const newPhoto: CameraCapturedPicture | void  = await CameraUtils.capturePhoto(cameraPayload.cameraRef);

        if(!newPhoto) return;

        addMedia({
            ...newPhoto,
            type: MediaTypes.IMAGE
        });
    }

    async function handleStartingVideo(){
        const newVideo: Pick<CameraCapturedPicture, "uri"> | void = await CameraUtils.startingVideo(cameraPayload.cameraRef);

        if(!newVideo) return;

        addMedia({
            ...newVideo,
            type: MediaTypes.VIDEO
        });
    }

    async function handleStopingVideo(){
        await CameraUtils.stopingVideo(cameraPayload.cameraRef);
    }

    
    function setButtonRecordPress(pressed: boolean){
        setCameraPayload({
            ...cameraPayload,
            buttonRecordPressed: pressed
        });
    }

    function setCameraType(type: CameraComponentType){
        setCameraPayload({
            ...cameraPayload,
            cameraType: type
        });
    }

    function setCameraPosition(position: CameraComponentPosition){
        setCameraPayload({
            ...cameraPayload,
            cameraPosition: position
        });
    }

    function setCameraRef(ref: Camera | null){
        setCameraPayload({
            ...cameraPayload,
            cameraRef: ref
        });
    }

    function setFlaskActivated(flashActivated: boolean){
        setCameraPayload({
            ...cameraPayload,
            flashActivated
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
            flashMode={cameraPayload.flashActivated ? FlashMode.on : FlashMode.off}
        >
            <Stack 
                width="full"
                height="full"
                justifyContent="flex-end"
                paddingBottom={10}
                space={20}
                padding={5}
            >
                <Stack
                    width="full"
                    direction="row"
                    justifyContent="space-between"
                >
                    {medias.length ? (
                        <Center
                            onTouchStart={()=> props.navigation.navigate("MediasCaptured")}
                        >
                            <Image 
                                source={{
                                    uri: medias[medias.length - 1].uri
                                }}

                                width={100}
                                height={100}
                                borderRadius={20}
                                borderColor="primary"
                                borderWidth={5}
                                alt="myphoyo"
                            />
                        </Center>
                    ) : null}
                    <IconButton 
                        icon={
                            <Icon 
                                as={<MaterialCommunityIcons name={cameraPayload.flashActivated ? "flashlight" : "flashlight-off"}/>}
                                size="xl"
                                color="primary"
                            />
                        }
                        backgroundColor="secondary"
                        borderRadius="full"
                        onTouchStart={() => setFlaskActivated(!cameraPayload.flashActivated)}
                        width={70}
                        height={70}
                    />
                </Stack>
                <Stack
                    width="full"
                    direction="row"
                    justifyContent="space-between"
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

                            const type: CameraComponentType = cameraPayload.cameraType === "photo" ? "video" : "photo"

                            setCameraType(type);
                        }}
                        width={70}
                        height={70}
                    />
                    <IconButton
                        backgroundColor={cameraPayload.buttonRecordPressed ? "primary" : "secondary"}
                        borderRadius="full"
                        onPressIn={() =>{
                            setButtonRecordPress(true);

                            if(cameraPayload.cameraType === "photo")
                                handleCapturePhoto();

                            if(cameraPayload.cameraType === "video")
                                handleStartingVideo();
                        }}
                        onPressOut={()=> {
                            setButtonRecordPress(false);

                            if(cameraPayload.cameraType === "video")
                                handleStopingVideo();
                        }}
                        width={70}
                        height={70}
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
                        width={70}
                        height={70}
                        onTouchStart={() => {

                            const position: CameraComponentPosition = cameraPayload.cameraPosition === "back" ? "front" : "back"

                            setCameraPosition(position);
                        }}
                    />
                </Stack>
            </Stack>
        </Camera>
    )
}


export default memo(AccessCameraComponent);
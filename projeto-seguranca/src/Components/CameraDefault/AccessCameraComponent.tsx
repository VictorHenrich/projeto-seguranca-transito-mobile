import {useState, useContext, memo, useCallback} from "react"
import { useNavigation, NavigationProp, useFocusEffect} from '@react-navigation/native';
import { Center, IconButton, Icon, Stack, Image } from 'native-base';
import { Camera, CameraType, CameraCapturedPicture, FlashMode } from 'expo-camera';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CameraUtils, { CameraStateProps } from "./CameraUtils";
import { ContextCamera, IContextCamera, MediaTypes } from "./CameraProvider";
import ButtonDefault from "../ButtonDefault";



function AccessCameraComponent(props: any){
    const navigation:  NavigationProp<any> = useNavigation();

    const {
        addMedia,
        medias,
        onNext
    }: IContextCamera = useContext(ContextCamera);

    const [cameraState, setCameraState] = useState<CameraStateProps>({
        buttonRecordPressed: false,
        flashActivated: false,
        mediaType: MediaTypes.IMAGE,
        cameraRef: null,
        cameraType: CameraType.back
    });

    useFocusEffect(useCallback(()=> {
        CameraUtils.requestCameraPermission();
    }, []));

    async function handleCapturePhoto(){
        const newPhoto: CameraCapturedPicture | void  = await CameraUtils.capturePhoto(cameraState.cameraRef);

        if(!newPhoto) return;

        addMedia({
            ...newPhoto,
            type: MediaTypes.IMAGE
        });
    }

    async function handleStartingVideo(){
        const newVideo: Pick<CameraCapturedPicture, "uri"> | void = await CameraUtils.startingVideo(cameraState.cameraRef);

        if(!newVideo) return;

        addMedia({
            type: MediaTypes.VIDEO,
            ...newVideo
        });
    }

    async function handleStopingVideo(){
        await CameraUtils.stopingVideo(cameraState.cameraRef);
    }

    function handleCameraState(props: Partial<CameraStateProps>){
        setCameraState({
            ...cameraState,
            ...props
        });
    }


    return (
        <Center 
            width="full" 
            height="full"
        >
            <Camera
                type={cameraState.cameraType}
                style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute"
                }}
                ref={(cameraRef) => {
                    if(!cameraState.cameraRef && cameraRef)
                        handleCameraState({ cameraRef });
                }}
                flashMode={cameraState.flashActivated ? FlashMode.on : FlashMode.off}
            >
                {
                    medias.length > 0
                        ? (
                            <Center 
                                width="full"
                                position="absolute"
                                top={10}
                                padding={10}
                            >
                                <ButtonDefault 
                                    text="Continuar"
                                    rightIcon={
                                        <Icon 
                                            as={<FontAwesome5 name="arrow-right" />}
                                        />
                                    }
                                    onPress={()=> onNext(medias)}
                                />
                            </Center>
                        )
                        : null
                }
                <Stack 
                    width="full"
                    justifyContent="flex-end"
                    position="absolute"
                    bottom={10}
                    space={10}
                    padding={5}
                >
                    <Stack
                        width="full"
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {medias.length ? (
                            <Center
                                onTouchStart={()=> navigation.navigate("MediasCaptured")}
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
                                    as={<MaterialCommunityIcons name={cameraState.flashActivated ? "flashlight" : "flashlight-off"}/>}
                                    size="xl"
                                    color="primary"
                                />
                            }
                            backgroundColor="secondary"
                            borderRadius="full"
                            onTouchStart={() => handleCameraState({ flashActivated: !cameraState.flashActivated })}
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
                                    as={<FontAwesome5 name={
                                        cameraState.mediaType === MediaTypes.IMAGE ? "camera" : "video"
                                    }/>}
                                    size="xl"
                                    color="primary"
                                />
                            }
                            backgroundColor="secondary"
                            borderRadius="full"
                            onTouchStart={() => {

                                const mediaType: MediaTypes = 
                                    cameraState.mediaType === MediaTypes.IMAGE 
                                        ? MediaTypes.VIDEO : MediaTypes.IMAGE

                                handleCameraState({ mediaType });
                            }}
                            width={70}
                            height={70}
                        />
                        <IconButton
                            backgroundColor={cameraState.buttonRecordPressed ? "primary" : "secondary"}
                            borderRadius="full"
                            onPressIn={() =>{
                                handleCameraState({ buttonRecordPressed: true });

                                if(cameraState.mediaType === MediaTypes.IMAGE)
                                    handleCapturePhoto();

                                if(cameraState.mediaType === MediaTypes.VIDEO)
                                    handleStartingVideo();
                            }}
                            onPressOut={()=> {
                                handleCameraState({ buttonRecordPressed: false });

                                if(cameraState.mediaType === MediaTypes.VIDEO)
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
                                const cameraType: CameraType = 
                                    cameraState.cameraType === CameraType.back 
                                        ? CameraType.front : CameraType.back

                                handleCameraState({ cameraType });
                            }}
                        />
                    </Stack>
                </Stack>
            </Camera>
        </Center>
    )
}


export default memo(AccessCameraComponent);
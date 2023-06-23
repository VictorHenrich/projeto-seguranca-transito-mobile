import {useState} from "react";

import { Center, IconButton, Icon, Stack } from 'native-base';
import { Camera, CameraType } from 'expo-camera';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo"


type CameraType = "video" | "photo"

type CameraPosition = "front" | "back"


export interface CameraStateProps{
    buttonRecordPressed: boolean,
    cameraPosition: CameraPosition,
    cameraType: CameraType
}


export default function CameraComponent(props: any){

    const [cameraState, setCameraState] = useState<CameraStateProps>({
        buttonRecordPressed: false,
        cameraPosition: "back",
        cameraType: "photo"
    });

    function setButtonRecordPress(pressed: boolean){
        setCameraState({
            ...cameraState,
            buttonRecordPressed: pressed
        });
    }

    function setCameraType(type: CameraType){
        setCameraState({
            ...cameraState,
            cameraType: type
        });
    }

    function setCameraPosition(position: CameraPosition){
        setCameraState({
            ...cameraState,
            cameraPosition: position
        });
    }

    return (
        <Camera
            type={cameraState.cameraPosition === "back" ? CameraType.back : CameraType.front}
            style={{
                height: "100%",
                width: "100%",
                position: "absolute"
            }}
        >
            <Center 
                width="full"
                height="full"
                justifyContent="flex-end"
                paddingBottom={10}
            >
                <Stack
                    width="full"
                    direction="row"
                    justifyContent="space-around"
                >   
                    <IconButton 
                        icon={
                            <Icon 
                                as={<FontAwesome5 name={cameraState.cameraType == "photo" ? "camera" : "video"}/>}
                                size="xl"
                                color="primary"
                            />
                        }
                        backgroundColor="secondary"
                        borderRadius="full"
                        onTouchStart={() => {

                            const type: CameraType = cameraState.cameraType === "photo" ? "video" : "photo"

                            setCameraType(type);
                        }}
                        padding={5}
                    />
                    <IconButton
                        backgroundColor={cameraState.buttonRecordPressed ? "primary" : "secondary"}
                        borderRadius="full"
                        onPressIn={() =>{
                            setButtonRecordPress(true)
                        }}
                        onPressOut={()=> {
                            setButtonRecordPress(false)
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

                            const position: CameraPosition = cameraState.cameraPosition === "back" ? "front" : "back"

                            setCameraPosition(position);
                        }}
                    />
                </Stack>
            </Center>
        </Camera>
    )
}
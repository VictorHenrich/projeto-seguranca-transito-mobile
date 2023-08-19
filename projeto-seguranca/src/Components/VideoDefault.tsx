import { useState } from "react";
import { Video, VideoProps, ResizeMode } from "expo-av";
import { Center } from "native-base";
import ContainerDefault from "./ContainerDefault";

interface VideoState{
    inPause: boolean,
    inLooping: boolean,
    inMute: boolean
}

export default function VideoDefault(props: VideoProps){
    const [videoState, setVideoState] = useState<VideoState>({
        inPause: true,
        inLooping: true,
        inMute: false
    });

    function handleStateVideo(props: Partial<VideoState>): void{
        setVideoState({
            ...videoState,
            ...props
        });
    }

    return (
        <Center
            width="full"
            height="full"
        >
            <Video
                style={{
                    width: "100%",
                    height: "100%",
                }}
                resizeMode={ResizeMode.COVER}
                shouldPlay={videoState.inPause}
                isLooping={videoState.inLooping}
                isMuted={videoState.inMute}
                onTouchEndCapture={()=>{
                    handleStateVideo({inPause: !videoState.inPause})
                }}
                {...props}
            />
        </Center>
    )
}
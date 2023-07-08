import { useState } from "react";
import { Video, VideoProps,  AVPlaybackStatus } from "expo-av";
import { Stack, IconButton } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import SliderDefault from "./SliderDefault";


interface VideoState{
    inPause: boolean,
    inLooping: boolean,
    inMute: boolean
}

export default function VideoDefault(props: VideoProps){
    const [videoDuration, setVideoDuration] = useState<number>(0);

    const [videoPositionCurrent, setVideoPositionCurrent] = useState<number>(0);

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

    function handleVideoUpdateStatus(status: AVPlaybackStatus): void{
        if(!status.isLoaded) return;

        if(status.playableDurationMillis && !videoDuration)
            setVideoDuration(status.playableDurationMillis || 0);

        if(status.isPlaying)
            setVideoPositionCurrent(status.positionMillis || 0);
    }

    return (
        <Stack
            direction="column"
            width="full"
            height="full"
        >
            <Video
                style={{
                    width: "100%",
                    height: "90%"
                }}
                shouldPlay={videoState.inPause}
                isLooping={videoState.inLooping}
                isMuted={videoState.inMute}
                onPlaybackStatusUpdate={handleVideoUpdateStatus}
                {...props}
            />
            <Stack
                width="full"
                height="10%"
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                backgroundColor="secondary"
            >
                <IconButton 
                    as={<FontAwesome5 name={videoState.inPause ? "pause" : "play"}/>}
                    backgroundColor="primary"
                    onTouchStart={()=> {
                        handleStateVideo({ inPause: !videoState.inPause });
                    }}
                    padding={1}
                    color="#FFFFFF"
                />
                <SliderDefault
                    width="80%"
                    minValue={0}
                    maxValue={videoDuration}
                    step={0.1}
                    value={videoPositionCurrent}
                />
            </Stack>
        </Stack>
    )
}
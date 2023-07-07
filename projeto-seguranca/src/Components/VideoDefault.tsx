import { useState, useRef } from "react";
import { Video, VideoProps,  AVPlaybackStatus } from "expo-av";
import { Stack, IconButton, Icon } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import SliderDefault from "./SliderDefault";


interface VideoDuration{
    current: number,
    total: number
}


interface VideoState{
    inPause: boolean,
    inLooping: boolean,
    inMute: boolean
}

export default function VideoDefault(props: VideoProps){
    const sliderRef = useRef(null);

    const [videoDuration, setVideoDuration] = useState<VideoDuration>({
        current: 0,
        total: 0
    });

    const [videoState, setVideoState] = useState<VideoState>({
        inPause: true,
        inLooping: true,
        inMute: false
    });

    function handleVideoDuration(props: Partial<VideoDuration>): void{
        setVideoDuration({
            ...videoDuration,
            ...props
        });
    }

    function handleStateVideo(props: Partial<VideoState>): void{
        setVideoState({
            ...videoState,
            ...props
        });
    }

    function handleVideoUpdateStatus(status: AVPlaybackStatus): void{
        if(!status.isLoaded) return;

        if(status.playableDurationMillis && !videoDuration.total)
            handleVideoDuration({ total: status.playableDurationMillis });

        if(status.isPlaying)
            handleVideoDuration({ current: status.positionMillis });

        if(status.didJustFinish)
            handleVideoDuration({ current: 0 });
    }

    return (
        <Stack
            direction="column"
            width="full"
            height="full"
            space={10}
        >
            <Video
                style={{
                    width: "100%",
                    height: "100%"
                }}
                shouldPlay={videoState.inPause}
                isLooping={videoState.inLooping}
                isMuted={videoState.inMute}
                //onPlaybackStatusUpdate={handleVideoUpdateStatus}
                {...props}
            />
        </Stack>
    )
}
import { useState } from "react";
import { Video, VideoProps, ResizeMode } from "expo-av";
import { Center, Stack, Slider, Icon } from "native-base";
import ButtonDefault from "./ButtonDefault";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

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

    const [positionVideo, setPositionVideo] = useState<number>(0);

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
                    handleStateVideo({inPause: !videoState.inPause});
                }}
                onPlaybackStatusUpdate={(status) =>{

                    if(!status.isLoaded) return;

                    setPositionVideo(status.positionMillis / (status.durationMillis || 1));
                }}
                {...props}
            />

            <Stack
                width="full"
                height={50}
                alignItems="center"
                space={10}
            >
                <ButtonDefault 
                    text=""
                    endIcon={(
                        <Icon 
                            as={
                                <FontAwesome5 
                                    name={videoState.inPause ? "pause" : "play"} 
                                />
                            }
                        />
                    )}
                />

                <Slider 
                    w="90%"
                    defaultValue={0} 
                    minValue={0} 
                    maxValue={100} 
                    step={1}
                    value={positionVideo}
                >
                    <Slider.Track>
                    <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>
            </Stack>
        </Center>
    )
}
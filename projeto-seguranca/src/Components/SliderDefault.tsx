import { Slider, ISliderProps } from "native-base";
import { useRef } from "react";



export default function SliderDefault(props: ISliderProps){
    return (
        <Slider
            minValue={0}
            defaultValue={0}
            step={1}
            {...props}
        >
            <Slider.Track backgroundColor="primaray">
                <Slider.FilledTrack 
                    backgroundColor="primary"
                    color="primary"
                />
            </Slider.Track>
            <Slider.Thumb backgroundColor="primary"/>
        </Slider>
    )
}
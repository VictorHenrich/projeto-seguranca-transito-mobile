import { PropsWithRef } from "react";
import { Slider, ISliderProps } from "native-base";


export interface SliderDefaultProps extends ISliderProps, PropsWithRef<ISliderProps>{

}


export default function SliderDefault(props: SliderDefaultProps){
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
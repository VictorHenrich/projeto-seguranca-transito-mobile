import {useState} from "react";

import DateTimePicker, { TimePickerOptions } from '@react-native-community/datetimepicker';


export interface InputDefaultProps extends TimePickerOptions{
    colorDefault?: string,
    colorFocus?: string,
    icon?: any,
    backgroundColor?: string
}


export default function InputDefault({ 
    colorDefault = "#97A6B4",
    colorFocus = "primary",
    backgroundColor = "rgba(0,0,0, 0.5)",
    icon,
    ...props
}: Partial<InputDefaultProps>){

    return (
        <DateTimePicker
            style={{
                backgroundColor: "transparent",
                borderColor: colorFocus,
                opacity: 0.5,
                minHeight: 70,
                maxHeight: 80,
                width: "100%",
                borderWidth: "3px"
            }}
            {...props}
        />
    )
}
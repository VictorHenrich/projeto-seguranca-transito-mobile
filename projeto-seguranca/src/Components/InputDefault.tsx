import {useState} from "react";

import {  
    Input, 
    IInputProps,
    Icon
} from "native-base";


export interface InputDefaultProps extends IInputProps{
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

    const [inputFocus, setInputFocus] = useState<boolean>();

    function onFocus(event: any): void{
        if(props.onFocus)
            props.onFocus(event);

        setInputFocus(true);
    }


    function onBlur(event: any): void{
        if(props.onBlur)
            props.onBlur(event);

        setInputFocus(false);
    }

    return (
        <Input
            variant="outline"
            borderWidth="3px"
            backgroundColor="transparent"
            color={colorDefault}
            borderColor={colorDefault}
            width="full"
            maxHeight={80}
            minHeight={70}
            fontWeight={700}
            placeholderTextColor={colorDefault}
            opacity={0.5}
            _focus={{
                color: colorFocus,
                borderColor: colorFocus,
                placeholderTextColor: colorFocus,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                opacity: 1
            }}
            InputRightElement={
                icon && (
                    <Icon
                        color={inputFocus ? colorFocus : colorDefault}
                        margin={5}
                        size="xl"
                        as={icon}
                    />
                )
            }
            onFocus={onFocus}
            onBlur={onBlur}
            {...props}
        />
    )
}
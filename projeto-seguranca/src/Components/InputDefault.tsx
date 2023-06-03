import {useState} from "react";

import {  
    Input, 
    IInputProps,
    InputGroup,
    Icon
} from "native-base";


export interface InputDefaultProps extends IInputProps{
    colorDefault: void | string,
    colorFocus: void | string,
    icon: void | any,
    backgroundColor: void | string
}


interface IStyleInput{
    color: string,
    backgroundColor: string,
    opacity: number
}


export default function InputDefault({ 
    colorDefault = "#97A6B4",
    colorFocus = "primary",
    backgroundColor = "rgba(0,0,0, 0.5)",
    icon,
    ...props
}: InputDefaultProps){

    const [styleInput, setSyleInput] = useState<IStyleInput>({
        color: colorDefault,
        opacity: 1,
        backgroundColor: "transparent"
    });

    return (
        <InputGroup>
            <Input
                padding={5}
                variant="outline"
                borderWidth="3px"
                backgroundColor={styleInput.backgroundColor}
                color={styleInput.color}
                borderColor={styleInput.color}
                width="full"
                fontWeight={700}
                placeholderTextColor={styleInput.color}
                opacity={styleInput.opacity}
                onFocus={()=>{
                    setSyleInput({
                        color: colorFocus,
                        opacity: 1,
                        backgroundColor
                    })
                }}
                onBlur={()=>{
                    setSyleInput({
                        color: colorDefault,
                        opacity: 0.3,
                        backgroundColor: "transparent"
                    })
                }}
                InputRightElement={
                    icon && (
                        <Icon
                            color={styleInput.color}
                            margin={5}
                            size="xl"
                            as={icon}
                        />
                    )
                }
                {...props}
            />
        </InputGroup>
    )
}
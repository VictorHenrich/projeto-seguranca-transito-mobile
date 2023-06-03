import {  
    Input, 
    IInputProps,
    InputGroup,
} from "native-base"


export interface InputDefaultProps extends IInputProps{
    colorDefault: void | string,
    colorFocus: void | string
}



export default function InputDefault({ 
    placeholder, 
    inputProps = {},
    colorDefault = "#97A6B4",
    colorFocus = "primary"
}: InputDefaultProps){

    return (
        <InputGroup>
            <Input 
                variant="outline"
                borderWidth="3px"
                borderColor={colorDefault}
                width="full"
                placeholderTextColor={colorDefault}
                opacity={0.5}
                placeholder={placeholder}
                {...inputProps}
                _focus={{
                    borderColor: colorFocus,
                    color: colorFocus,
                    opacity: 1
                }}
            />
        </InputGroup>
    )
}
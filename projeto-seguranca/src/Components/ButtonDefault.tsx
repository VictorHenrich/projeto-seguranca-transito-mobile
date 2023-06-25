import { Button, IButtonProps, Text, ITextProps } from "native-base"

export interface ButtonDefaultProps extends IButtonProps{
    text: string,
    TextProps?: ITextProps
}


export default function ButtonDefault({ text, TextProps = {}, ...props}: ButtonDefaultProps){

    return (
        <Button 
            backgroundColor="primary"
            width="80%"
            minHeight={50}
            borderRadius={20}
            fontWeight={700}
            {...props}
        >
            <Text
                color="#FFFFFF"
                fontWeight={700}
                {...TextProps}
            >
                {text}
            </Text>
        </Button>
    )
}
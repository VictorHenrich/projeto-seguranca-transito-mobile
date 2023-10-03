import { Button, IButtonProps, Text, ITextProps } from "native-base"

export interface ButtonDefaultProps extends IButtonProps{
    text: string,
    TextProps?: ITextProps
}


export default function ButtonDefault({ text, TextProps = {}, ...props}: ButtonDefaultProps){

    return (
        <Button
            backgroundColor="primary"
            minHeight={50}
            borderRadius={20}
            fontWeight={700}
            shadow="5"
            width="80%"
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
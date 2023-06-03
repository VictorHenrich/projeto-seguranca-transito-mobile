import { Button, IButtonProps, Text } from "native-base"

export interface ButtonDefaultProps extends IButtonProps{
    text: string
}


export default function ButtonDefault(props: ButtonDefaultProps){

    return (
        <Button 
            backgroundColor="primary"
            width="80%"
            height={50}
            borderRadius={20}
            fontWeight={700}
            {...props}
        >
            <Text
                color="#FFFFFF"
                fontWeight={700}
            >
                {props.text}
            </Text>
        </Button>
    )
}
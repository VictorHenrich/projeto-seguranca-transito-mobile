import { Checkbox, ICheckboxProps, Text } from "native-base";



export interface CheckboxDefaultProps extends ICheckboxProps{
    label: string
}


export default function CheckboxDefault({
    label,
    ...props
}: CheckboxDefaultProps){
    return (
        <Checkbox
            borderColor="primary"
            padding={2}
            backgroundColor="#000000"
            _checked={{
                backgroundColor: "primary",
                borderColor: "secondary",
                color: "secondary"
            }}

            {...props}
        >
            <Text 
                color="primary"
                fontWeight={700}
            >
                {label}
            </Text>
        </Checkbox>
    )
}
import { FormControl, ITextProps, IFormControlProps, Text } from "native-base";
import SelectDefault, { SelectDefaultProps } from "./SelectDefault";


export interface SelectFormComponentProps extends IFormControlProps{
    selectDefaultProps?: SelectDefaultProps,
    LabelProps?: ITextProps;
    label: string;
}


export default function SelectFormDefault({
    selectDefaultProps = {
        itens: []
    },
    LabelProps = {},
    label
}: SelectFormComponentProps){

    return (
        <FormControl width="full">
            <FormControl.Label>
                <Text
                    color="#999999"
                    fontWeight={500}
                    {...LabelProps}
                >
                    {label}
                </Text>
            </FormControl.Label>
            <SelectDefault
                width="full"
                {...selectDefaultProps}
                
            />
        </FormControl>
    );
}
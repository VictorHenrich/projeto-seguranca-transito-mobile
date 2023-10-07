import { FormControl, ITextProps, IFormControlProps, Text } from "native-base";
import SelectDefault, {SelectDefaultProps} from "../../../../Components/SelectDefault";


export interface SelectComponent extends IFormControlProps{
    selectDefaultProps?: SelectDefaultProps,
    LabelProps?: ITextProps;
    label: string;
}


export default function SelectComponent({
    selectDefaultProps = {
        itens: []
    },
    LabelProps = {},
    label
}: SelectComponent){

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
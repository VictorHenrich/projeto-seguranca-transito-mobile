import { FormControl, ITextProps, IFormControlProps, Text } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import InputDefault, {InputDefaultProps} from "../../../../Components/InputDefault";



export interface InputUserProps extends IFormControlProps{
    InputDefaultProps?: InputDefaultProps;
    LabelProps?: ITextProps;
    label: string;
}


export default function InputUser({
    InputDefaultProps = {},
    LabelProps = {},
    label
}: InputUserProps){

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
            <InputDefault
                width="full"
                icon={<MaterialCommunityIcons name="format-text"/>}
                {...InputDefaultProps}
                
            />
        </FormControl>
    );
}
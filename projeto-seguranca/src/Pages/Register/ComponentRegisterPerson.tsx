import {useContext} from "react";
import {
    Stack,
    Icon
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ContextRegister, IContextRegister } from "./RegisterProvider";

import InputDefault from '../../Components/InputDefault';
import ButtonDefault from "../../Components/ButtonDefault";
import SelectDefault from "../../Components/SelectDefault";
import ComponentContainerRegister from "./ComponentContainerRegister";


const stateIssue = [
    {text: "SANTA CATARINA"},
    {text: "RIO GRANDE DO SUL"},
    {text: "PARANÁ"},
    {text: "SÃO PAULO"},
    {text: "RIO DE JANEIRO"},
]


export default function ComponentRegisterPerson(props: any){

    const {
        setUserPayload,
        userPayload
    } = useContext<IContextRegister>(ContextRegister);

    return (
        <ComponentContainerRegister 
            heading="Vamos começar com as informações da sua carteira."
            navigation={props.navigation}
        >
            <Stack 
                direction="column" 
                space={10} 
                width="full"
            >
                <InputDefault
                    placeholder='Nome'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={userPayload.name}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            name: value
                        })
                    }}
                />
                <InputDefault 
                    placeholder='CPF'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            document: value
                        })
                    }}
                />
                <InputDefault 
                    placeholder='RG'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            documentRg: value
                        })
                    }}
                />
                <SelectDefault 
                    placeholder='Estado Emissor'
                    selectItem={{
                        itens: stateIssue
                    }}
                    onValueChange={(itemValue) => {
                        setUserPayload({
                            ...userPayload,
                            stateIssue: itemValue
                        })
                    }}
                />
                <InputDefault 
                    placeholder='Data de nascimento'
                    icon={<MaterialIcons name="date-range"/>}
                />
            </Stack>
            <ButtonDefault 
                text="Próximo"
                rightIcon={
                    <Icon 
                        as={<FontAwesome name="arrow-right"/>}
                        size="lg"
                    />
                }
                onTouchStart={() => {
                    props.navigation.navigate("RegisterAddress");
                }}
            />
        </ComponentContainerRegister>
    )
}
import {useContext} from "react";
import {
    Stack,
    Icon
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ContextRegister, IContextRegister } from "./RegisterProvider";

import InputDefault from '../../Components/InputDefault';
import ButtonDefault from "../../Components/ButtonDefault";
import SelectDefault from "../../Components/SelectDefault";
import ComponentContainerRegister from "./ComponentContainerRegister";
import HeadingDefault from "../../Components/HeadingDefault";


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
            heading={(
                <Stack 
                    space={8} 
                    direction="row"
                    alignItems="center"
                >
                    <Icon 
                        as={<FontAwesome5 name="user-plus"/>}
                        size="xl"
                        color="primary"
                    />
                    <HeadingDefault textAlign="left">
                        Vamos começar com as informações da sua {` `}
                        <HeadingDefault color="primary">Carteira Pessoal</HeadingDefault>
                    </HeadingDefault>
                </Stack>
            )}
            navigation={props.navigation}
            LinkProps={{
                label: "Voltar para o login",
                onPress() {
                    props.navigation.pop();
                },
            }}
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
                    value={userPayload.document}
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
                    value={userPayload.documentRg}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            documentRg: value
                        })
                    }}
                />
                <SelectDefault 
                    placeholder='Estado Emissor'
                    selectedValue={userPayload.stateIssue}
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
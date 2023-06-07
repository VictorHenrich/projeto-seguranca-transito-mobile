import {useContext, useEffect} from "react";
import {NavigationContainerRef} from "@react-navigation/native"
import {
    Stack,
    Box,
    Text,
    Icon
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import InputDefault from '../../Components/InputDefault';
import BackgroundApp from "../../Components/BackgroundApp";
import HeadingDefault from "../../Components/HeadingDefault";
import ButtonDefault from "../../Components/ButtonDefault";
import ContainerDefault from "../../Components/ContainerDefault";
import SelectDefault from "../../Components/SelectDefault";
import { ContextRegister, IContextRegister } from "./RegisterProvider";
import ComponentPositionStep from "./ComponentPositionStep";


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
        <>
            <BackgroundApp />
            <ContainerDefault
                display="flex"
                justifyContent="space-evenly"
                paddingTop={10}
                paddingBottom={10}
                paddingLeft={20}
                paddingRight={20}
                overflowY="auto"
                minHeightContainer={1000}
            >
                <HeadingDefault textAlign="center">
                    Vamos começar com as informações da sua carteira.
                </HeadingDefault>
                <ComponentPositionStep />
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
                        <Icon as={<FontAwesome name="arrow-right"/>}/>
                    }
                    onPressIn={() => {
                        props.navigation.navigate("RegisterAddress");
                    }}
                />
                <Text color="primary" fontWeight={700}>Voltar ao inicio</Text>
            </ContainerDefault>
        </>
    )
}
import {useContext, useEffect} from "react";
import {
    Stack,
    Box,
    Text,
    Icon
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";


import InputDefault from '../../Components/InputDefault';
import BackgroundApp from "../../Components/BackgroundApp";
import HeadingDefault from "../../Components/HeadingDefault";
import ButtonDefault from "../../Components/ButtonDefault";
import ContainerDefault from "../../Components/ContainerDefault";
import SelectDefault from "../../Components/SelectDefault";
import { ContextRegister, IContextRegister } from "./RegisterProvider";
import ComponentPositionStep from "./ComponentPositionStep";


const states = [
    {text: "SC"},
    {text: "RS"},
    {text: "PR"},
    {text: "SP"},
    {text: "RJ"},
]


export default function ComponentRegisterAddress(props: any){
    const {
        setUserPayload,
        userPayload,
        pageIndex
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
                    Agora precisamos dos dados de seu endereço atual.
                </HeadingDefault>
                <ComponentPositionStep />
                <Stack 
                    direction="column" 
                    space={10} 
                    width="full"
                >
                    <SelectDefault 
                        placeholder='UF'
                        selectItem={{
                            itens: states
                        }}
                        onValueChange={(itemValue) => {
                            setUserPayload({
                                ...userPayload,
                                stateIssue: itemValue
                            })
                        }}
                    />
                    <InputDefault 
                        placeholder='Cidade'
                        icon={<MaterialCommunityIcons name="format-text"/>}
                        onChangeText={(value) => {
                            setUserPayload({
                                ...userPayload,
                                document: value
                            })
                        }}
                    />
                    <InputDefault 
                        placeholder='Bairro'
                        icon={<MaterialCommunityIcons name="format-text"/>}
                        onChangeText={(value) => {
                            setUserPayload({
                                ...userPayload,
                                documentRg: value
                            })
                        }}
                    />
                    <InputDefault 
                        placeholder='Logradouro'
                        icon={<MaterialCommunityIcons name="format-text"/>}
                    />
                </Stack>
                <ButtonDefault 
                    text="Anterior"
                    leftIcon={
                        <Icon as={<FontAwesome name="arrow-left"/>}/>
                    }
                    onPressIn={()=> {
                        props.navigation.navigate("RegisterPerson");
                    }}
                />
                <ButtonDefault 
                    text="Próximo"
                    rightIcon={
                        <Icon as={<FontAwesome name="arrow-right"/>}/>
                    }
                />
                <Text color="primary" fontWeight={700}>Voltar ao inicio</Text>
            </ContainerDefault>
        </>
    )
}
import {useContext} from "react";
import {
    Stack,
    Icon
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";


import InputDefault from '../../Components/InputDefault';
import ButtonDefault from "../../Components/ButtonDefault";
import SelectDefault from "../../Components/SelectDefault";
import { ContextRegister, IContextRegister } from "./RegisterProvider";
import ComponentContainerRegister from "./ComponentContainerRegister";


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
        userPayload
    } = useContext<IContextRegister>(ContextRegister);

    return (
        <ComponentContainerRegister 
            heading="Agora precisamos dos dados de seu endereço atual."
            navigation={props.navigation}
        >
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
                text="Próximo"
                rightIcon={
                    <Icon 
                        as={<FontAwesome name="arrow-right"/>}
                        size="lg"
                    />
                }
                onTouchStart={()=> {
                    props.navigation.navigate("RegisterVehicle");
                }}
            />
            <ButtonDefault 
                text="Anterior"
                leftIcon={
                    <Icon
                        size="lg"
                        as={<FontAwesome name="arrow-left"/>}
                    />
                }
                onTouchStart={()=> {
                    props.navigation.navigate("RegisterPerson");
                }}
            />
            
        </ComponentContainerRegister>
    )
}
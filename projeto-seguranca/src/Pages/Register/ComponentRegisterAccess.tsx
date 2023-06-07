import {useContext} from "react";
import { Stack, Icon } from "native-base";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


import { ContextRegister, IContextRegister } from "./RegisterProvider";
import ButtonDefault from "../../Components/ButtonDefault";
import InputDefault from "../../Components/InputDefault";
import ComponentContainerRegister from "./ComponentContainerRegister";




export default function ComponentRegisterAccess(props: any){
    const {
        setUserPayload,
        userPayload
    } = useContext<IContextRegister>(ContextRegister);

    return (
        <ComponentContainerRegister 
            heading="Finalizando agora com seus dados de acesso."
            navigation={props.navigation}
        >
            <Stack
                direction="column" 
                space={10} 
                width="full"
            >
                <InputDefault 
                    placeholder='Email'
                    icon={<Entypo name="email"/>}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            document: value
                        })
                    }}
                />
                <InputDefault 
                    placeholder='Senha'
                    icon={<Fontisto name="locked"/>}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            documentRg: value
                        })
                    }}
                />
                <InputDefault 
                    placeholder='Confirmar Senha'
                    icon={<Fontisto name="locked"/>}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            documentRg: value
                        })
                    }}
                />
            </Stack>
            <ButtonDefault 
                text="Anterior"
                leftIcon={
                    <Icon 
                        as={<FontAwesome name="arrow-left"/>}
                        size="lg"
                    />
                }
                onTouchStart={()=> {
                    props.navigation.navigate("RegisterVehicle");
                }}
            />
            <ButtonDefault 
                text="Cadastrar"
                rightIcon={
                    <Icon
                        size="lg"
                        as={<FontAwesome5 name="address-card"/>
                        
                    }/>
                }
                onTouchStart={()=> {
                    props.navigation.navigate("RegisterFinish");
                }}
            />
        </ComponentContainerRegister>
    )
}
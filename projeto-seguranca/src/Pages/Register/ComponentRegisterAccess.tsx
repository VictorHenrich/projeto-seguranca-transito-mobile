import {useContext, useState} from "react";
import { Stack, Icon } from "native-base";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


import { ContextRegister, IContextRegister } from "./RegisterProvider";
import ButtonDefault from "../../Components/ButtonDefault";
import InputDefault from "../../Components/InputDefault";
import ComponentContainerRegister from "./ComponentContainerRegister";
import UserCreateService from "../../Services/CreateUserService";
import AlertDefault, { AlertDefaultProps } from "../../Components/AlertDefault";




export default function ComponentRegisterAccess(props: any){
    const {
        setUserPayload,
        userPayload
    } = useContext<IContextRegister>(ContextRegister);

    const [alertState, setAlertState] = useState<Omit<AlertDefaultProps, "stateOpen">>({
        text: "",
        open: false,
        status: "info"
    });


    async function createUser(){
        try{
            await new UserCreateService(
                userPayload
            ).execute();

            props.navigation.navigate("RegisterFinish")

        }catch(error){
            setAlertState({
                open: true,
                text: "Falha ao realizar cadastro. Tente novamente!",
                status: "error"
            });
        }
    }

    return (
        <ComponentContainerRegister 
            heading="Finalizando agora com seus dados de acesso."
            navigation={props.navigation}
            AlertProps={{
                ...alertState,
                stateOpen: (open: boolean) => {
                    setAlertState({...alertState, open });
                }
            }}
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
                            email: value
                        })
                    }}
                />
                <InputDefault 
                    placeholder='Senha'
                    icon={<Fontisto name="locked"/>}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            password: value
                        })
                    }}
                />
            </Stack>
            <Stack
                direction="column"
                width="full"
                alignItems="center"
                space={10}
            >
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
                    onTouchStart={()=> createUser()}
                />
            </Stack>
        </ComponentContainerRegister>
    )
}
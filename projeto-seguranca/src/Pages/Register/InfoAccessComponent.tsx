import React, {useContext, useState} from "react";
import { Stack, Icon, Box } from "native-base";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


import { ContextRegister, IContextRegister } from "./RegisterProvider";
import ButtonDefault from "../../Components/ButtonDefault";
import InputDefault from "../../Components/InputDefault";
import ContainerRegisterComponent from "./ContainerRegisterComponent";
import UserCreateService from "../../Services/App/CreateUserService";
import { AlertDefaultProps } from "../../Components/AlertDefault";
import HeadingDefault from "../../Components/HeadingDefault";




function InfoAccessComponent(props: any): React.ReactElement{
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

            props.navigation.navigate("FinishRegister");

        }catch(error){
            setAlertState({
                open: true,
                text: "Falha ao realizar cadastro. Tente novamente!",
                status: "error"
            });
        }
    }

    return (
        <ContainerRegisterComponent 
            heading={(
                <Stack
                    width="full"
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    space={10}
                >
                    <Icon 
                        as={<FontAwesome5 name="user-lock"/>}
                        size="4xl"
                        color="primary"
                    />
                    <Box maxWidth="70%">
                        <HeadingDefault textAlign="left" fontSize={25}>
                            Finalizando agora com seus {` `}
                            <HeadingDefault color="primary" fontSize={25}>
                                Dados de Acesso
                            </HeadingDefault>
                        </HeadingDefault>
                    </Box>
                </Stack>
            )}
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
                        props.navigation.navigate("InfoVehicle");
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
        </ContainerRegisterComponent>
    )
}


export default React.memo(InfoAccessComponent);
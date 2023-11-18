import React, {useContext, useState} from "react";
import { Stack, Icon, Box } from "native-base";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { ContextRegister, IContextRegister } from "./RegisterProvider";
import ButtonDefault from "../../Components/ButtonDefault";
import InputDefault from "../../Components/InputDefault";
import ContainerRegisterComponent from "./ContainerRegisterComponent";
import UserCreateService from "../../Services/App/CreateUserService";
import { AlertDefaultProps } from "../../Components/AlertDefault";
import HeadingDefault from "../../Components/HeadingDefault";
import LoadingComponent, { LoadingComponentProps } from "../../Components/Loading";




function InfoAccessComponent(props: any): React.ReactElement{
    const {
        setUserPayload,
        userPayload,
        setPageIndex
    } = useContext<IContextRegister>(ContextRegister);

    const [alertState, setAlertState] = useState<Omit<AlertDefaultProps, "stateOpen">>({
        text: "",
        open: false,
        status: "info"
    });

    const [loadingState, setLoadingState] = useState<LoadingComponentProps>({
        message: "Criando conta",
        open: false
    });

    const navigation: NavigationProp<any> = useNavigation<any>();

    navigation.addListener("focus", ()=> setPageIndex(4));


    function handleSetLoadingState(loadingStatePayload: Partial<LoadingComponentProps>): void{
        setLoadingState({...loadingState, ...loadingStatePayload});
    }

    async function createUser(){
        try{
            handleSetLoadingState({ open: true });

            await new UserCreateService(
                userPayload
            ).execute();

            handleSetLoadingState({ open: false });

            props.navigation.navigate("FinishRegister");

        }catch(error){
            handleSetLoadingState({ open: false });

            setAlertState({
                open: true,
                text: "Falha ao realizar cadastro. Tente novamente!",
                status: "error"
            });
        }
    }

    return (
        <>
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
                        value={userPayload.email}
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
                        type="password"
                        value={userPayload.password}
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
            <LoadingComponent {...loadingState}/>
        </>
    )
}


export default React.memo(InfoAccessComponent);
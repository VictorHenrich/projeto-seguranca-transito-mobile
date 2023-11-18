import React, { useEffect } from "react";

import { 
    Box, 
    Link, 
    Stack, 
    Text,
    Image,
    Center
} from 'native-base';
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import { useState } from 'react';
import { useNavigation, NavigationProp, StackActions } from "@react-navigation/native";

import InputDefault from '../../Components/InputDefault';
import HeadingDefault from '../../Components/HeadingDefault';
import BackgroundApp from '../../Components/BackgroundApp';
import ButtonDefault from '../../Components/ButtonDefault';
import ContainerDefault from '../../Components/ContainerDefault';
import AuthorizationService, {AuthorizationProps} from '../../Services/App/AuthorizationService';
import AlertDefault, { AlertDefaultProps } from '../../Components/AlertDefault';
import AuthRefreshService from "../../Services/App/AuthRefreshService";
import LoadingComponent, { LoadingComponentProps } from "../../Components/Loading";



function LoginPage(props: any): React.ReactElement{
    const navigation: NavigationProp<any> = useNavigation<any>();

    const [userAuthPayload, setUserAuthPayload] = useState<AuthorizationProps>({
        email: "",
        password: ""
    });

    const [alertState, setAlertState] = useState<Omit<AlertDefaultProps, "stateOpen">>({
        text: "",
        open: false,
        status: "info"
    });

    const [loadingState, setLoadingState] = useState<LoadingComponentProps>({
        message: "Validando sua autenticidade",
        open: false
    });

    useEffect(() => {
        verifyUserLogged();
    }, []);


    async function authenticate(): Promise<void>{
        try{

            handleSetLoadingState({ open: true });
            
            await new AuthorizationService(userAuthPayload).execute();

            handleSetLoadingState({ open: false });
            
            navigation.dispatch(
                StackActions.push("HomePage")
            );

        }catch(error){
            handleSetLoadingState({ open: false });

            setAlertState({
                open: true,
                text: "Falha ao realizar autenticação",
                status: "error"
            });
        }
    }

    function handleSetLoadingState(loadingStatePayload: Partial<LoadingComponentProps>): void{
        setLoadingState({...loadingState, ...loadingStatePayload});
    }

    async function verifyUserLogged(): Promise<void>{
        const userLogged: boolean = await new AuthRefreshService().execute();

        if(userLogged)
            navigation.navigate("HomePage");
    }

    return (
        <>
            <BackgroundApp />
            <ContainerDefault
                display="flex"
                padding={5}
                flexDirection="column"
                justifyContent="space-between"
                haveScrool={true}
                minHeight={900}
                backgroundColor="transparent"
            >
                <Stack
                    width="full"
                    direction="column" 
                    space={5}
                    alignItems="flex-start"
                >
                    <Stack space={2} direction="column">
                        <HeadingDefault 
                            textAlign="left"
                            fontSize={30}
                            color="primary"
                        >
                            Seja muito bem vindo!
                        </HeadingDefault>
                        <HeadingDefault 
                            textAlign="left"
                            fontSize={25}
                        >
                            Faça seu login agora.
                        </HeadingDefault>
                    </Stack>
                    <Center width="full">
                        <Image 
                            source={require("../../../assets/lock.png")}
                            width={200}
                            height={200}
                            alt="lock"
                        />
                    </Center>
                    
                </Stack>
                <Box width="full">
                    <Stack direction="column" space={10}>
                        <InputDefault 
                            placeholder='Email'
                            icon={<Entypo name="email"/>}
                            value={userAuthPayload.email}
                            onChangeText={(text: string) => {

                                setUserAuthPayload({
                                    ...userAuthPayload,
                                    email: text
                                })
                            }}
                        />
                        <Stack direction="column" space={2}>
                            <InputDefault 
                                placeholder='Senha'
                                type="password"
                                icon={<Fontisto name="locked"/>}
                                onChangeText={(text: string) => {
                                    
                                    setUserAuthPayload({
                                        ...userAuthPayload,
                                        password: text
                                    })
                                }}
                            />
                            <Text
                                color="primary"
                                textAlign="right"
                                fontWeight={700}
                            >
                                Esqueci minha senha
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
                <ButtonDefault 
                    text="SIGN IN" 
                    onTouchStart={authenticate}
                />
                <Link
                    onTouchStart={() =>{
                        navigation.navigate("RegisterPage");
                    }}
                >
                    <Text 
                        color="#97A6B4"
                        fontWeight={700}
                    >
                        Ainda não possui uma conta?
                        {" "}
                        <Text color="primary" fontWeight={700}>
                            Cadastre-se
                        </Text>
                    </Text>
                </Link>
            </ContainerDefault>
            <AlertDefault 
                {...alertState}
                stateOpen={(open) =>{
                    setAlertState({ ...alertState, open })
                }}
            />
            <LoadingComponent {...loadingState}/>
        </>
    )
}

export default React.memo(LoginPage);
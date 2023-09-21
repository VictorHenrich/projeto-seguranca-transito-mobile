import React from "react";

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
import { useNavigation, NavigationProp } from "@react-navigation/native";

import InputDefault from '../../Components/InputDefault';
import HeadingDefault from '../../Components/HeadingDefault';
import BackgroundApp from '../../Components/BackgroundApp';
import ButtonDefault from '../../Components/ButtonDefault';
import ContainerDefault from '../../Components/ContainerDefault';
import AuthorizationService, {AuthorizationProps} from '../../Services/AuthorizationService';
import AlertDefault, { AlertDefaultProps } from '../../Components/AlertDefault';



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


    async function authenticate(){
        try{
            await new AuthorizationService(userAuthPayload).execute();

            navigation.navigate("HomePage");

        }catch(error){
            setAlertState({
                open: true,
                text: "Falha ao realizar autenticação",
                status: "error"
            });
        }
    }

    return (
        <>
            <BackgroundApp />
            <ContainerDefault
                display="flex"
                padding={5}
                flexDirection="column"
                justifyContent="space-between"
                haveScrool={false}
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
                <ButtonDefault text="SIGN IN" onTouchStart={authenticate}/>
                <Link
                    onTouchStart={() =>{
                        navigation.navigate("RegisterPage")  
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
        </>
    )
}

export default React.memo(LoginPage);
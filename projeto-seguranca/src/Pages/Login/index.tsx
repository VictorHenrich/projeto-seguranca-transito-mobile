import { 
    Box, 
    Link, 
    Stack, 
    Text
} from 'native-base';
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import { useState } from 'react';

import InputDefault from '../../Components/InputDefault';
import HeadingDefault from '../../Components/HeadingDefault';
import BackgroundApp from '../../Components/BackgroundApp';
import ButtonDefault from '../../Components/ButtonDefault';
import ContainerDefault from '../../Components/ContainerDefault';
import AuthorizationService, {AuthorizationProps} from '../../Services/AuthorizationService';
import AlertDefault, { AlertDefaultProps } from '../../Components/AlertDefault';



export default function LoginPage(props: any){

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

            props.navigation.navigate("HomePage");

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
                width="full" 
                height="full"
                display="flex"
                padding={5}
                flexDirection="column"
                justifyContent="space-evenly"
                minHeightContainer={900}

            >
                <Box>
                    <HeadingDefault>
                        Seja muito bem vindo!
                    </HeadingDefault>
                    <HeadingDefault>
                        Faça seu login agora
                    </HeadingDefault>
                </Box>
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
                </Box>
                <ButtonDefault text="SIGN IN" onTouchStart={authenticate}/>
                <Link
                    onTouchStart={() =>{
                        props.navigation.navigate("RegisterPage")  
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
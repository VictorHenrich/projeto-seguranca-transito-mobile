import { 
    Center, 
    Box, 
    Stack, 
    Text
} from 'native-base';

import InputDefault from '../../Components/InputDefault';
import HeadingDefault from '../../Components/HeadingDefault';
import BackgroundApp from '../../Components/BackgroundApp';
import ButtonDefault from '../../Components/ButtonDefault';


export default function LoginPage(props: any){
    return (
        <>
            <BackgroundApp />
            <Center
                width="full" 
                height="full"
                display="flex"
                padding={5}
                flexDirection="column"
                justifyContent="space-evenly"

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
                        <InputDefault placeholder='Email'/>
                        <InputDefault placeholder='Senha'/>
                        <Text
                            color="primary"
                            textAlign="right"
                            fontWeight={700}
                        >
                            Esqueci minha senha
                        </Text>
                    </Stack>
                </Box>
                <ButtonDefault text="SIGN IN"/>
                <Text 
                    color="#97A6B4"
                    fontWeight={700}
                >
                    Ainda não possui uma conta?
                    {" "}
                    <Text color="primary">Cadastre-se</Text>
                </Text>
            </Center>
        </>
    )
}
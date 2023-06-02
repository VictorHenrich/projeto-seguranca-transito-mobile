import { 
    Center, 
    Box, 
    Heading, 
    Input, 
    FormControl, 
    Stack, 
    Text,
    Button,
    Image
} from 'native-base';

import LoginImage from "../../../assets/login.jpg";


export default function LoginPage(props: any){
    return (
        <Center 
            backgroundColor="secondary" 
            width="full" 
            height="full"
            display="flex"
            padding={5}
            flexDirection="column"
            justifyContent="space-evenly"
        >
            <Box>
                <Heading color="#FFFFFF">
                    Seja muito bem vindo!
                </Heading>
                <Heading color="#FFFFFF">
                    Faça seu login agora.
                </Heading>
            </Box>
            <Box width="full">
                <Stack direction="column" space={10}>
                    <FormControl>
                        <FormControl.Label>
                            <Text 
                                color="#97A6B4"
                                fontWeight={700}
                                fontSize={15}
                            >
                                Email
                            </Text>
                        </FormControl.Label>
                        <Input 
                            variant="underlined" 
                            borderColor="#97A6B4" 
                            color="primary"
                            fontWeight={700}
                            fontSize={15}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>
                            <Text 
                                color="#97A6B4"
                                fontWeight={700}
                                fontSize={15}
                            >
                                Senha
                            </Text>
                        </FormControl.Label>
                        <Input 
                            variant="underlined" 
                            borderColor="#97A6B4" 
                            color="primary"
                            fontWeight={700}
                            fontSize={15}
                            type="password"
                        />
                    </FormControl>
                    <Text
                        color="primary"
                        textAlign="right"
                        fontWeight={700}
                        fontFamily="default"
                    >
                        Esqueci minha senha
                    </Text>
                </Stack>
            </Box>
            <Button
                backgroundColor="primary"
                width="80%"
                height={50}
                borderRadius={20}
                fontWeight={700}
            >
                <Text 
                    color="#FFFFFF"
                    fontWeight={700}
                >
                    SIGN IN
                </Text>
            </Button>
            <Text 
                color="#97A6B4"
                fontWeight={700}
            >
                Ainda não possui uma conta?
                {" "}
                <Text color="primary">Cadastre-se</Text>
            </Text>
        </Center>
    )
}
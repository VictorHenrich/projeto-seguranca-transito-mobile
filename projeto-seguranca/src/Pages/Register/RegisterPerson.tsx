import {
    Center,
    Stack,
    Box,
    Text,
    AddIcon
} from "native-base";


import InputDefault from '../../Components/InputDefault';
import BackgroundApp from "../../Components/BackgroundApp";
import HeadingDefault from "../../Components/HeadingDefault";
import ButtonDefault from "../../Components/ButtonDefault";


export default function RegisterPerson(props: any){

    return (
        <>
            <BackgroundApp />
            <Center
                width="full"
                height="full"
                display="flex"
                justifyContent="space-evenly"
                padding={10}
                overflowY="auto"
            >
                <HeadingDefault>
                    Vamos começar com as informações da sua carteira.
                </HeadingDefault>

                <Stack direction="row">
                    {new Array(5).map(()=>{

                        return (
                            <Box 
                                width={10}
                                height={10}
                                color="primary"
                            />
                        );
                    })}
                </Stack>
                <Stack direction="column" space={10}>
                    <InputDefault placeholder='Nome'/>
                    <InputDefault placeholder='CPF'/>
                    <InputDefault placeholder='RG'/>
                    <InputDefault placeholder='Estado Emissor'/>
                    <InputDefault placeholder='Data de nascimento'/>
                </Stack>
                <ButtonDefault text="Próximo"/>
                <Text color="primary" fontWeight={700}>Voltar ao inicio</Text>
            </Center>
        </>
    )
}
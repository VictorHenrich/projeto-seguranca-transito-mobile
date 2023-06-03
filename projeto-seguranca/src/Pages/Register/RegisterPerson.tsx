import {
    Stack,
    Box,
    Text,
} from "native-base";
import Foundation from "react-native-vector-icons/Foundation";


import InputDefault from '../../Components/InputDefault';
import BackgroundApp from "../../Components/BackgroundApp";
import HeadingDefault from "../../Components/HeadingDefault";
import ButtonDefault from "../../Components/ButtonDefault";
import ContainerDefault from "../../Components/ContainerDefault";


export default function RegisterPerson(props: any){

    return (
        <>
            <BackgroundApp />
            <ContainerDefault
                display="flex"
                justifyContent="space-evenly"
                padding={10}
                overflowY="auto"
                minHeightContainer={1000}
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
                    <InputDefault 
                        placeholder='Nome'
                        icon={<Foundation name="info"/>}
                    />
                    <InputDefault 
                        placeholder='CPF'
                        icon={<Foundation name="info"/>}
                    />
                    <InputDefault 
                        placeholder='RG'
                        icon={<Foundation name="info"/>}
                    />
                    <InputDefault 
                        placeholder='Estado Emissor'
                        icon={<Foundation name="info"/>}
                    />
                    <InputDefault 
                        placeholder='Data de nascimento'
                        icon={<Foundation name="info"/>}
                    />
                </Stack>
                <ButtonDefault text="Próximo"/>
                <Text color="primary" fontWeight={700}>Voltar ao inicio</Text>
            </ContainerDefault>
        </>
    )
}
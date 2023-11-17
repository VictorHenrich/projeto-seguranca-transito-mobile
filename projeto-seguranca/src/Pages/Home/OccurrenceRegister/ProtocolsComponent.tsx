import React from "react";
import { Stack, Text, Center } from "native-base";
import HeadingDefault from "../../../Components/HeadingDefault";
import ContainerDefault from "../../../Components/ContainerDefault";
import ModalDefault from "../../../Components/ModalDefault";
import ImageDefault from "../../../Components/ImageDefault";



function ProtocolsComponent(props: any): React.ReactElement{
    const [open, setOpen] = React.useState<boolean>(true);

    return (
        <ModalDefault
            heading="Protocolos de segurança"
            open={open}
            ButtonCancelProps={{
                text: "Pular",
                backgroundColor: "black"
            }}
            ButtonConfirmProps={{
                display: "none"
            }}
            onClose={() => setOpen(false)}
        >
            <ContainerDefault 
                haveScrool={true} 
                minHeight={500}
            >
                <Stack space={5} direction="column" width="full">
                    <HeadingDefault color="primary" marginBottom={10}>
                        O que fazer durante o acidente?
                    </HeadingDefault>

                    <Center width="full" marginBottom={10}>
                        <ImageDefault
                            width={200}
                            height={200}
                            source={require("../../../../assets/protocols.png")}
                            alt="ImageProtocol"
                        />
                    </Center>

                    <Text 
                        color="white" 
                        fontWeight={700}
                        textAlign="justify"
                        fontSize={15}
                    >
                        É crucial permanecer calmo e evitar discussões sem sentido em um acidente. 
                        No aplicativo, você pode registrar todas as informações essenciais para criar um boletim de ocorrência. 
                        Esse documento é fundamental se precisar recorrer judicialmente, 
                        seja para a seguradora ou em um eventual processo contra você.
                    </Text>
                    <Text color="white" textAlign="justify" fontSize={15}>
                        <Text color="red" fontWeight={800}>AVISO IMPORTANTE 1:</Text>
                        {" "}Se o acidente que você se envolveu resultar em vítimas feridas ou fatais, 
                        chame imediatamente a urgência. 
                        Este aplicativo destina-se exclusivamente a situações de danos materiais.
                    </Text>
                    <Text color="white" textAlign="justify" fontSize={15}>
                        <Text color="red" fontWeight={800}>AVISO IMPORTANTE 2:</Text>
                        {" "}Realize o cadastro o mais rápido possível e mova os veículos que obstruem a 
                        via para evitar multas por interrupção prolongada do tráfego.
                    </Text>
                    <Text color="white" textAlign="justify" fontSize={15}>
                        <Text color="red" fontWeight={800}>AVISO IMPORTANTE 3:</Text>
                        {" "}Não é necessário acionar as autoridades, 
                        pois seguirão os mesmos procedimentos que você estará realizando. 
                        A exceção ocorre em casos de condutores sem carteira ou em estado alterado.
                    </Text>
                </Stack>
            </ContainerDefault>
        </ModalDefault>
    );
}


export default React.memo(ProtocolsComponent);
import { Stack, Avatar, Heading, Text, Divider, Icon } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import ContainerDefault from "../../../Components/ContainerDefault";
import InputUser from "./InputUser";



export default function UserProfileComponent(props: any){
    return (
        <ContainerDefault 
            background="secondary"
            justifyContent="flex-start"
            padding={5}
        >
            <Stack
                direction="column"
                space={20}
                width="full"
            >
                <Stack 
                    direction="column" 
                    space={5}
                    alignItems="center"
                    width="full"
                >
                    <Avatar size="xl"/>
                    <Heading
                        fontWeight={700}
                        color="primary"
                        textAlign="center"
                    >
                        Victor Henrich
                    </Heading>
                </Stack>
                <Stack
                    width="full"
                    space={10}
                >
                    <Stack
                        width="full"
                        space={2}
                        direction="column"
                    >
                        <Stack 
                            direction="row"
                            alignItems="flex-end"
                            space={5}
                            paddingBottom={2}
                        >
                            <Text
                                fontWeight={700}
                                color="primary"
                            >
                                DADOS PESSOAIS
                            </Text>
                            <Icon
                                size="xl"
                                as={<FontAwesome5 name="user"/>}
                                color="primary"
                            />
                        </Stack>
                        <Divider 
                            backgroundColor="primary" 
                            height={1}
                            borderRadius={5}
                        />
                    </Stack>
                    <Stack
                        width="full"
                        space={10}
                    >
                        <InputUser 
                            label="EMAIL"
                        />
                        <InputUser 
                            label="CPF"
                        />
                        <InputUser 
                            label="RG"
                        />
                        <InputUser 
                            label="TELEFONE"
                        />
                    </Stack>
                </Stack>
                <Stack
                    width="full"
                    space={10}
                >
                    <Stack
                        width="full"
                        space={2}
                        direction="column"
                    >
                        <Stack 
                            direction="row"
                            alignItems="flex-end"
                            space={5}
                            paddingBottom={2}
                        >
                            <Text
                                fontWeight={700}
                                color="primary"
                            >
                                DADOS DE ENDEREÇO
                            </Text>
                            <Icon
                                size="xl"
                                as={<FontAwesome5 name="map-marker-alt"/>}
                                color="primary"
                            />
                        </Stack>
                        <Divider 
                            backgroundColor="primary" 
                            height={1}
                            borderRadius={5}
                        />
                    </Stack>
                    <Stack
                        width="full"
                        space={10}
                    >
                        <InputUser 
                            label="UF"
                        />
                        <InputUser 
                            label="CIDADE"
                        />
                        <InputUser 
                            label="BAIRRO"
                        />
                        <InputUser 
                            label="LOGRADOURO"
                        />
                        <InputUser 
                            label="NUMERO"
                        />
                    </Stack>
                </Stack>
                <Stack
                    width="full"
                    space={10}
                >
                    <Stack 
                        direction="row"
                        alignItems="flex-end"
                        space={5}
                        paddingBottom={2}
                    >
                        <Text
                            fontWeight={700}
                            color="primary"
                        >
                            VEÍCULOS CADASTRADOS
                        </Text>
                        <Icon
                            size="xl"
                            as={<FontAwesome5 name="car"/>}
                            color="primary"
                        />
                    </Stack>
                </Stack>
            </Stack>
        </ContainerDefault>
    );
}
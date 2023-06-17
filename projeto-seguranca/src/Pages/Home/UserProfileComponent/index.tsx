import { Stack, Avatar, Heading, Text, Divider, Icon } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import ContainerDefault from "../../../Components/ContainerDefault";
import InputDefault from "../../../Components/InputDefault";



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
                    <Text
                        fontWeight={700}
                        color="primary"
                    >
                        DADOS PESSOAIS
                        <Divider 
                            backgroundColor="primary" 
                            height={1}
                            borderRadius={5}
                        />
                    </Text>
                    <Stack
                        width="full"
                        space={10}
                    >
                        <InputDefault 
                            width="full"
                            placeholder="EMAIL"
                            icon={<FontAwesome5 name="user"/>}
                        />
                        <InputDefault 
                            width="full"
                            placeholder="CPF"
                            icon={<FontAwesome5 name="user"/>}
                        />
                        <InputDefault 
                            width="full"
                            placeholder="RG"
                            icon={<FontAwesome5 name="user"/>}
                        />
                        <InputDefault
                            width="full"
                            placeholder="TELEFONE"
                            icon={<FontAwesome5 name="user"/>}
                        />
                    </Stack>
                </Stack>
                <Stack
                    width="full"
                    space={10}
                >
                    <Text
                        fontWeight={700}
                        color="primary"
                    >
                        DADOS DE ENDEREÇO
                        <Divider 
                            backgroundColor="primary"
                            height={1}
                            borderRadius={5}
                        />
                    </Text>
                    <Stack
                        width="full"
                        space={10}
                    >
                        <InputDefault 
                            width="full"
                            placeholder="UF"
                            icon={<FontAwesome5 name="map-marker-alt"/>}
                        />
                        <InputDefault 
                            width="full"
                            placeholder="CIDADE"
                            icon={<FontAwesome5 name="map-marker-alt"/>}
                        />
                        <InputDefault 
                            width="full"
                            placeholder="LOGRADOURO"
                            icon={<FontAwesome5 name="map-marker-alt"/>}
                        />
                        <InputDefault
                            width="full"
                            placeholder="NUMERO"
                            icon={<FontAwesome5 name="map-marker-alt"/>}
                        />
                    </Stack>
                </Stack>
                <Stack
                    width="full"
                    space={10}
                >
                    <Text
                        fontWeight={700}
                        color="primary"
                    >
                        VEÍCULOS CADASTRADOS
                        <Divider 
                            backgroundColor="primary"
                            height={1}
                            borderRadius={5}
                        />
                    </Text>
                </Stack>
            </Stack>
        </ContainerDefault>
    );
}
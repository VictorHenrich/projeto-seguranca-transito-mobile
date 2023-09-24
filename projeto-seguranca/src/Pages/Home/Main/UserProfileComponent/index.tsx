import React, {useContext, Context} from "react";
import { Stack, Avatar, Heading, Text, Divider, Icon } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ContainerDefault from "../../../../Components/ContainerDefault";
import InputUserComponent from "./InputUserComponent";
import VehicleItemComponent from "./VehicleItemComponent";
import ButtonDefault from "../../../../Components/ButtonDefault";
import { ContextHome, IContextMain } from "../MainProvider";



function UserProfileComponent(props: any): React.ReactElement{
    const {
        user
    } =  useContext<IContextMain>(ContextHome);

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
                        textTransform="capitalize"
                    >
                        {user.name}
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
                                as={<FontAwesome5 name="user-cog"/>}
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
                        <InputUserComponent 
                            label="EMAIL"
                            InputDefaultProps={{
                                value: user.email
                            }}
                        />
                        <InputUserComponent 
                            label="CPF"
                            InputDefaultProps={{
                                value: user.documentCpf
                            }}
                        />
                        <InputUserComponent 
                            label="RG"
                            InputDefaultProps={{
                                value: user.documentRg
                            }}
                        />
                        <InputUserComponent 
                            label="TELEFONE"
                            InputDefaultProps={{
                                value: user.telephone
                            }}
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
                        <InputUserComponent 
                            label="UF"
                            InputDefaultProps={{
                                value: user.address.state
                            }}
                        />
                        <InputUserComponent 
                            label="CIDADE"
                            InputDefaultProps={{
                                value: user.address.city
                            }}
                        />
                        <InputUserComponent 
                            label="BAIRRO"
                            InputDefaultProps={{
                                value: user.address.district
                            }}
                        />
                        <InputUserComponent 
                            label="LOGRADOURO"
                            InputDefaultProps={{
                                value: user.address.street
                            }}
                        />
                        <InputUserComponent 
                            label="NUMERO"
                            InputDefaultProps={{
                                value: `${user.address.number}`
                            }}
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
                                VEÍCULOS CADASTRADOS
                            </Text>
                            <Icon
                                size="xl"
                                as={<FontAwesome5 name="car"/>}
                                color="primary"
                            />
                        </Stack>
                        <Divider 
                            backgroundColor="primary" 
                            height={1}
                            borderRadius={5}
                        />
                    </Stack>
                    {
                        user.vehicles.map((vehicle, index) => (
                            <VehicleItemComponent {...vehicle} key={index}/>
                        ))
                    }
                </Stack>

                <Stack 
                    width="full"
                    direction="column"
                    alignItems="center"
                    space={5}
                    borderTopWidth={1}
                    borderTopColor="#999999"
                    paddingTop={5}
                >
                    <ButtonDefault 
                        text="Salvar Alterações"
                        rightIcon={
                            <Icon 
                                as={<FontAwesome5 name="user-edit"/>}
                                color="#FFFFFF"
                            />
                        }
                    />
                    <ButtonDefault 
                        text="Adicionar Veículo"
                        rightIcon={
                            <Icon 
                                as={<FontAwesome5 name="car-side"/>}
                                color="#FFFFFF"
                            />
                        }
                    />
                    <ButtonDefault
                        backgroundColor="red"
                        text="Sair"
                        rightIcon={
                            <Icon 
                                as={<MaterialCommunityIcons name="logout"/>}
                                color="#FFFFFF"
                            />
                        }
                    />
                </Stack>
            </Stack>
        </ContainerDefault>
    );
}


export default React.memo(UserProfileComponent);
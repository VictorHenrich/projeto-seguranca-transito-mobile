import { Icon, FlatList, Text, Stack, Badge, Box } from "native-base"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import ContainerDefault from "../../../Components/ContainerDefault"



interface OccurrencePayload{
    address: {
        city: string,
        street: string,
        district: string,
        state: string,
        number: string
    },
    vehicle: {
        plate: string,
        renavam: string
    },
    created: string,
    status: "SUCESSO" | "ANDAMENTO" | "ERRO" | "PROCESSANDO"
}


export default function OccurrenceListComponent(props: any){

    const data: OccurrencePayload[] = [
        {
            address: {
                city: "Capivari de Baixo",
                street: "Rua antonio Manuel dos Santos",
                district: "Caçador",
                number: "393",
                state: "SC"
            },
            vehicle: {
                plate: "IHK-339-92",
                renavam: "222.1111-00"
            },
            created: "14/06/2023 00:00:00",
            status: "SUCESSO"
        },
        {
            address: {
                city: "Tubarão",
                street: "Rua não sei da onde",
                district: "Andrino",
                number: "S/N",
                state: "SC"
            },
            vehicle: {
                plate: "IHK-339-92",
                renavam: "222.1111-00"
            },
            created: "14/06/2023 00:00:00",
            status: "ERRO"
        },
        {
            address: {
                city: "Joenvilhe",
                street: "Rua Alguma coisa",
                district: "Centro",
                number: "s/n",
                state: "SC"
            },
            vehicle: {
                plate: "IHK-339-92",
                renavam: "222.1111-00"
            },
            created: "14/06/2023 00:00:00",
            status: "ANDAMENTO"
        },
        {
            address: {
                city: "Joenvilhe",
                street: "Rua Alguma coisa",
                district: "Centro",
                number: "s/n",
                state: "SC"
            },
            vehicle: {
                plate: "IHK-339-92",
                renavam: "222.1111-00"
            },
            created: "14/06/2023 00:00:00",
            status: "PROCESSANDO"
        }
    ]

    return (
        <ContainerDefault
            backgroundColor="secondary"
        >
            <FlatList
                width="full"
                padding={5}
                data={data}
                renderItem={(itemData) => {
                    return (
                        <Stack
                            width="full"
                            minHeight={150}
                            borderBottomWidth={2}
                            borderBottomColor="primary"
                            direction="column"
                            key={itemData.index}
                            paddingTop={5}
                            paddingBottom={5}
                            space={10}
                        >
                            <Stack
                                width="full"
                                justifyContent="space-between"
                                alignContent="center"
                                direction="row"
                            >
                                <Stack 
                                    direction="row" 
                                    space={4}
                                    alignItems="center"
                                    maxWidth={170}
                                >
                                    <Icon 
                                        as={<FontAwesome5 name="map-marker-alt"/>}
                                        color="primary"
                                    />
                                    <Text
                                        fontWeight="700"
                                        color="#e6e6e6"
                                        fontSize={12}
                                        maxWidth={130}
                                    >
                                        {`${itemData.item.address.street}, ${itemData.item.address.number}, ${itemData.item.address.district} - ${itemData.item.address.city} / ${itemData.item.address.state}`}
                                    </Text>
                                </Stack>
                                <Stack 
                                    direction="row"
                                    alignItems="center"
                                    maxWidth={170}
                                    space={4}
                                >
                                    <Icon 
                                        as={<FontAwesome5 name="car-crash"/>}
                                        color="primary"
                                    />
                                    <Text
                                        fontWeight="700"
                                        color="#e6e6e6"
                                        fontSize={12}
                                        maxWidth={130}
                                    >
                                        {`Placa ${itemData.item.vehicle.plate}, Renavam ${itemData.item.vehicle.renavam}`}
                                    </Text>
                                </Stack>
                            </Stack>
                            <Stack
                                display="flex"
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-end"
                            >
                                <Badge 
                                    colorScheme={
                                        itemData.item.status === "SUCESSO"
                                            ? "success"
                                            : itemData.item.status === "ERRO"
                                            ? "error"
                                            : itemData.item.status == "ANDAMENTO"
                                            ? "warmGray"
                                            : itemData.item.status === "PROCESSANDO"
                                            ? "warning"
                                            : "text"
                                    }
                                    minWidth={120}
                                >   
                                    {itemData.item.status}
                                </Badge>
                                <Text
                                    fontWeight="700"
                                    color="#a6a6a6"
                                    fontSize={12}
                                >
                                    {itemData.item.created}
                                </Text>
                            </Stack>
                        </Stack>
                    )
                }}
            />
        </ContainerDefault>
    )
}
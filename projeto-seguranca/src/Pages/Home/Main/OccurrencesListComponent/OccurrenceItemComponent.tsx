import {useState} from "react";
import { Badge, Text, PresenceTransition, Stack, Icon} from "native-base";
import Fontisto from "react-native-vector-icons/FontAwesome5";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ButtonDefault from "../../../../Components/ButtonDefault";
import { OccurrenceItemType } from "../../../../Services/App/GetOccurrencesService";
import { OccurrenceStatus } from "../../../../Patterns/IOccurrencePayload";
import Moment from "moment";


export default function OccurrenceItemComponent({
    address,
    created,
    description,
    location,
    status,
    vehicle
}: OccurrenceItemType){

    const [openCard, setOpenCard] = useState<boolean>(false);

    return (
        <Stack
            width="full"
            space={5}
            marginBottom={5}
            borderWidth={2}
            borderColor="#595959"
            borderRadius={10}
            padding={2}
            onTouchEndCapture={() => setOpenCard(!openCard)}
        >
            <Stack
                width="full"
                display="flex"
                direction="row"
                justifyContent="space-between"
            >
                <Badge 
                    colorScheme={
                        status === OccurrenceStatus.SUCCESS
                            ? "success"
                            : status === OccurrenceStatus.ERROR
                            ? "error"
                            : status == OccurrenceStatus.PROCESSING
                            ? "warmGray"
                            : status === OccurrenceStatus.PROGRESS
                            ? "warning"
                            : "text"
                    }
                    minWidth={120}
                >   
                    {status}
                </Badge>
                <Text
                    fontWeight="700"
                    color="#a6a6a6"
                    fontSize={12}
                >
                    {Moment(created).format("DD/MM/YYYY HH:mm:ss")}
                </Text>
                <Icon
                    color="primary"
                    as={<Fontisto name={openCard ? "angle-up" : "angle-down"}/>}
                    size="xl"
                />
            </Stack>
            <PresenceTransition
                visible={openCard}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 250
                    }
                }}
            >
                <Stack
                    width="full"
                    display={openCard ? "flex" : "none"}
                    space={10}
                >
                    <Stack
                        width="full"
                        direction="column"
                        space={5}
                    >
                        <Stack
                            direction="row"
                            space={2}
                            justifyContent="center"
                        >
                            <Text
                                color="primary"
                                fontWeight={700}
                            >
                                DADOS DE LOCALIZAÇÃO
                            </Text>
                            <Icon 
                                as={<FontAwesome5 name="map-marked-alt"/>}
                                color="primary"
                                size="md"
                            />
                        </Stack>
                        <Stack
                            width="full"
                            direction="column"
                            space={5}
                            paddingLeft={5}
                            paddingRight={5}
                        >
                            <Text fontWeight={500} color="#999999">
                                <Text color="#e6e6e6">UF: </Text> 
                                {address?.state}
                            </Text>
                            <Text fontWeight={500} color="#999999">
                                <Text color="#e6e6e6">CIDADE: </Text> 
                                {address?.city}
                            </Text>
                            <Text fontWeight={500} color="#999999">
                                <Text color="#e6e6e6">BAIRRO: </Text> 
                                {address?.district}
                            </Text>
                            <Text fontWeight={500} color="#999999">
                                <Text color="#e6e6e6">LOGRADOURO: </Text> 
                                {address?.street}
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack
                        width="full"
                        direction="column"
                        space={5}
                    >
                        <Stack
                            direction="row"
                            space={2}
                            justifyContent="center"
                        >
                            <Text
                                color="primary"
                                fontWeight={700}
                            >
                                DADOS DO VEÍCULO
                            </Text>
                            <Icon 
                                as={<FontAwesome5 name="car-crash"/>}
                                color="primary"
                                size="md"
                            />
                        </Stack>
                        <Stack
                            width="full"
                            direction="column"
                            space={5}
                            paddingLeft={5}
                            paddingRight={5}
                        >
                            <Text fontWeight={500} color="#999999">
                                <Text color="#e6e6e6">PLACA: </Text> 
                                {vehicle.plate}
                            </Text>
                            <Text fontWeight={500} color="#999999">
                                <Text color="#e6e6e6">RENAVAM: </Text> 
                                {vehicle.renavam}
                            </Text>
                            <Text fontWeight={500} color="#999999">
                                <Text color="#e6e6e6">TIPO VEÍCULO: </Text> 
                                {vehicle.vehicleType.toUpperCase()}
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack
                        direction="row"
                        space={5}
                        justifyContent="center"
                    >
                        <ButtonDefault 
                            text="Alterar" 
                            maxWidth={100}
                            borderRadius={2}
                            padding={0}
                        />
                        <ButtonDefault 
                            text="Excluir" 
                            maxWidth={100}
                            borderRadius={2}
                            backgroundColor="red"
                        />
                    </Stack>
                </Stack>
            </PresenceTransition>
        </Stack>
    )
}
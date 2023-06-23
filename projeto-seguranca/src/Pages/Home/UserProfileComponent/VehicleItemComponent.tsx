import {useState} from "react";
import { Text, PresenceTransition, Stack, Icon} from "native-base";
import Fontisto from "react-native-vector-icons/Fontisto";

import ButtonDefault from "../../../Components/ButtonDefault";
import IUserVehiclePayload from "../../../patterns/IUserVehiclePayload";



const valueDefault = "NÃO INFORMADO"


export default function VehicleItemComponent({
    plate,
    renavam,
    vehicleType,
    model = valueDefault,
    brand = valueDefault,
    chassi = valueDefault,
    color = valueDefault,
    haveSafe = false,
    year = valueDefault
}: IUserVehiclePayload){

    const [openCard, setOpenCard] = useState<boolean>(false);

    return (
        <Stack
            width="full"
            space={5}
            marginBottom={5}
            borderWidth={2}
            borderColor="#595959"
            borderRadius={10}
            padding={5}
            onTouchStart={() => setOpenCard(!openCard)}
        >
            <Stack
                width="full"
                display="flex"
                direction="row"
                justifyContent="space-between"
            >
                <Text
                    fontWeight="700"
                    color="#a6a6a6"
                    fontSize={12}
                >
                    <Text color="primary">PLACA: </Text> {plate}
                </Text>
                <Text
                    fontWeight="700"
                    color="#a6a6a6"
                    fontSize={12}
                >
                    <Text color="primary">RENAVAM: </Text> {renavam}
                </Text>
                <Icon
                    color="primary"
                    as={<Fontisto name={openCard ? "angle-up" : "angle-down"}/>}
                    size="sm"
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
                    borderTopWidth={2}
                    borderTopColor="primary"
                    paddingTop={5}
                >
                    <Text fontWeight={500} color="#999999">
                        <Text color="#e6e6e6">TIPO VEÍCULO: </Text> 
                        {vehicleType}
                    </Text>
                    <Text fontWeight={500} color="#999999">
                        <Text color="#e6e6e6">SEGURO: </Text> 
                        {haveSafe ? "SIM" : "NÃO"}
                    </Text>
                    <Text fontWeight={500} color="#999999">
                        <Text color="#e6e6e6">MARCA: </Text> 
                        {brand}
                    </Text>
                    <Text fontWeight={500} color="#999999">
                        <Text color="#e6e6e6">MODELO: </Text> 
                        {model}
                    </Text>
                    <Text fontWeight={500} color="#999999">
                        <Text color="#e6e6e6">ANO: </Text> 
                        {year}
                    </Text>
                    <Text fontWeight={500} color="#999999">
                        <Text color="#e6e6e6">COR: </Text> 
                        {color}
                    </Text>
                    <Text fontWeight={500} color="#999999">
                        <Text color="#e6e6e6">CHASSI: </Text> 
                        {chassi}
                    </Text>
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
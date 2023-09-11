import React from "react";
import {Image, Stack, Icon} from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import ButtonDefault from "../../../Components/ButtonDefault";
import HeadingDefault from "../../../Components/HeadingDefault";
import OccurrenceRegisterContainer from "./OccurrenceRegisterContainer";


function OccurrenceAddressLocalComponent(props: any): React.ReactElement{

    const navigation: NavigationProp<any> = useNavigation<any>();

    return (
        <OccurrenceRegisterContainer>
            <Stack
                width="full"
                direction="column"
                justifyContent="center"
                alignItems="center"
                space={10}
            >
                <HeadingDefault fontSize={28} textAlign="left">
                    Vamos começar capturando as informações do {" "}
                    <HeadingDefault color="primary" fontSize={28}>
                        local do acidente.
                    </HeadingDefault>
                </HeadingDefault>

                <Image 
                    source={require("../../../../assets/map.png")}
                    width={500}
                    height={200}
                    alt="map"
                />
            </Stack>

            <Stack
                width="full"
                space={5}
                direction="column"
                alignItems="center"
            >
                <ButtonDefault 
                    text="Obter localização atual"
                    rightIcon={
                        <Icon 
                            as={<FontAwesome5 name="map-marker-alt"/>}
                            size="xl"
                            color="#FFFFFF"
                        />
                    }
                    backgroundColor="primary"
                    TextProps={{
                        color: "#FFFFFF",
                        fontSize: 18
                    }}
                    onPress={() =>{
                        navigation.navigate("OccurrenceVehicle");
                    }}
                />
                <ButtonDefault 
                    text="Informar endereço"
                    rightIcon={
                        <Icon 
                            as={<FontAwesome5 name="map-marked-alt"/>}
                            size="xl"
                            color="#FFFFFF"
                        />
                    }
                    backgroundColor="primary"
                    TextProps={{
                        color: "#FFFFFF",
                        fontSize: 18
                    }}
                />
            </Stack>
        </OccurrenceRegisterContainer>
    );
}


export default React.memo(OccurrenceAddressLocalComponent);
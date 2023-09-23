import React, { useContext } from "react";
import {Image, Stack, Icon} from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import ButtonDefault from "../../../Components/ButtonDefault";
import HeadingDefault from "../../../Components/HeadingDefault";
import OccurrenceRegisterContainer from "./OccurrenceRegisterContainer";
import ILocationPayload from "../../../Patterns/ILocationPayload";
import AccessLocationService from "../../../Services/Expo/AccessLocationService";
import { IOccurrenceRegisterContext, OccurrenceRegisterContext } from "./OccurrenceRegisterProvider";


function OccurrenceAddressLocalComponent(props: any): React.ReactElement{
    const navigation: NavigationProp<any> = useNavigation<any>();

    const {
        occurrence,
        setOccurrence
    }: IOccurrenceRegisterContext = useContext<IOccurrenceRegisterContext>(OccurrenceRegisterContext);


    async function getLocation(): Promise<void>{
        const location: ILocationPayload = await new AccessLocationService().execute();

        setOccurrence({
            ...occurrence,
            location
        });

        navigation.navigate("OccurrenceVehicle");
    }

    return (
        <OccurrenceRegisterContainer
            showBackButton={false}
            ComponentTop={(
                <Stack
                    width="full"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    space={10}
                >
                    <HeadingDefault fontSize={30} textAlign="left">
                        Vamos começar obtendo as informações do {" "}
                        <HeadingDefault color="primary" fontSize={30}>
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
            )}

            ComponentCenter={(
                <Stack
                    width="full"
                    space={5}
                    direction="column"
                    alignItems="center"
                >
                    <ButtonDefault
                        padding={5}
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
                            fontSize: 20
                        }}
                        onPress={() => getLocation()}
                    />
                    <ButtonDefault 
                        padding={5}
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
                            fontSize: 20
                        }}
                        onPress={() => navigation.navigate("OccurrenceInfoAddress")}
                    />
                </Stack>
            )}
        />
    );
}


export default React.memo(OccurrenceAddressLocalComponent);
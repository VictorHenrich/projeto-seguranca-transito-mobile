import React, { useContext } from "react";
import {Image, Stack, ScrollView, Icon} from "native-base";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import OccurrenceRegisterContainer from "./OccurrenceRegisterContainer";
import InputDefault from "../../../Components/InputDefault";
import { IOccurrenceRegisterContext, OccurrenceRegisterContext } from "./OccurrenceRegisterProvider";
import IAddressPayload from "../../../Patterns/IAddressPayload";
import HeadingDefault from "../../../Components/HeadingDefault";
import ButtonDefault from "../../../Components/ButtonDefault";



function OccurrenceInfoAddressComponent(props: any){
    const navigation: NavigationProp<any> = useNavigation<any>();

    const {
        occurrence,
        setOccurrence
    }: IOccurrenceRegisterContext = useContext<IOccurrenceRegisterContext>(OccurrenceRegisterContext);

    function setAddress(address: Partial<IAddressPayload>): void{
        setOccurrence({
            ...occurrence,
            address: {
                ...occurrence?.address, 
                ...address
            }
        });
    }   

    return (
        <OccurrenceRegisterContainer
            minHeight={900}
            haveScrool={true}
            ComponentTop={(
                <Stack
                    width="full"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    space={5}
                >
                    <HeadingDefault fontSize={28} textAlign="left">
                        Por favor, {" "}
                        <HeadingDefault color="primary" fontSize={28}>
                            preencha todos os campos do endereço {" "}
                        </HeadingDefault>
                        manualmente.
                    </HeadingDefault>

                    <Image 
                        source={require("../../../../assets/location.png")}
                        width={200}
                        height={200}
                        alt="map"
                    />
                </Stack>
            )}

            ComponentCenter={(
                <Stack
                    width="full"
                    space={5}
                    marginTop={20}
                    marginBottom={20}
                >
                    <InputDefault 
                            placeholder="CEP" 
                            value={occurrence?.address?.zipcode}
                            onBlur={(item) => {
                                setAddress({zipcode: item.nativeEvent.text})
                            }}
                    />
                    <InputDefault 
                        placeholder="UF" 
                        value={occurrence?.address?.state}
                        onBlur={(item) => {
                            setAddress({state: item.nativeEvent.text})
                        }}
                    />
                    <InputDefault 
                        placeholder="Cidade" 
                        value={occurrence?.address?.city}
                        onBlur={(item) => {
                            setAddress({city: item.nativeEvent.text})
                        }}
                    />
                    <InputDefault 
                        placeholder="Bairro" 
                        value={occurrence?.address?.district}
                        onBlur={(item) => {
                            setAddress({district: item.nativeEvent.text})
                        }}
                    />
                    <InputDefault 
                        placeholder="Logradouro" 
                        value={occurrence?.address?.street}
                        onBlur={(item) => {
                            setAddress({street: item.nativeEvent.text})
                        }}
                    />
                    <InputDefault 
                        placeholder="numero" 
                        value={`${occurrence?.address?.number || ''}`}
                        onBlur={(item) => {
                            setAddress({number: item.nativeEvent.text})
                        }}
                    />
                </Stack>
            )}
            ComponentBottom={[
                (
                    <ButtonDefault
                        text="Próximo"
                        rightIcon={
                            <Icon 
                                as={<FontAwesome5 name="arrow-right"/>}
                                size="xl"
                                color="#FFFFFF"
                            />
                        }
                        backgroundColor="primary"
                        TextProps={{
                            color: "#FFFFFF",
                            fontSize: 18
                        }}
                        onPress={() => navigation.navigate("OccurrenceVehicle")}
                    />
                )
            ]}
        />
    );
}



export default React.memo(OccurrenceInfoAddressComponent);
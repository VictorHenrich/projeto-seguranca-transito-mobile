import React, { useContext } from "react";
import {Image, Stack, Icon} from "native-base";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import OccurrenceRegisterContainer from "./OccurrenceRegisterContainer";
import { IOccurrenceRegisterContext, OccurrenceRegisterContext } from "./OccurrenceRegisterProvider";
import IAddressPayload from "../../../Patterns/IAddressPayload";
import HeadingDefault from "../../../Components/HeadingDefault";
import ButtonDefault from "../../../Components/ButtonDefault";
import InputFormDefault from "../../../Components/InputFormDefault";
import SelectFormDefault from "../../../Components/SelectFormDefault";
import { states } from "../../../Utils/Constants";



function InfoAddressComponent(props: any){
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
            minHeight={500}
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
                >
                    <InputFormDefault 
                        label="CEP"
                        InputDefaultProps={{
                            value: occurrence?.address?.zipcode,
                            onBlur(item){
                                setAddress({zipcode: item.nativeEvent.text})
                            }
                        }}
                    />
                    <SelectFormDefault 
                        label="UF" 
                        selectDefaultProps={{
                            itens: states,
                            selectedValue: occurrence?.address?.state,
                            onValueChange(itemValue) {
                                setAddress({state: itemValue})
                            },
                        }}
                    />
                    <InputFormDefault 
                        label="Cidade" 
                        InputDefaultProps={{
                            value: occurrence?.address?.city,
                            onBlur: (item) => {
                                setAddress({city: item.nativeEvent.text});
                            }
                        }}
                    />
                    <InputFormDefault 
                        label="Bairro" 
                        InputDefaultProps={{
                            value: occurrence?.address?.district,
                            onBlur(item){
                                setAddress({district: item.nativeEvent.text})
                            }
                        }}
                        
                    />
                    <InputFormDefault 
                        label="Logradouro" 
                        InputDefaultProps={{
                            value: occurrence?.address?.street,
                            onBlur(item){
                                setAddress({street: item.nativeEvent.text})
                            }
                        }}
                    />
                    <InputFormDefault 
                        label="numero" 
                        InputDefaultProps={{
                            value: `${occurrence?.address?.number || ''}`,
                            onBlur(item){
                                setAddress({number: item.nativeEvent.text})
                            }
                        }}
                    />
                </Stack>
            )}
            ComponentBottom={[
                (
                    <ButtonDefault
                        text="Próximo"
                        key="button-info-address"
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
                        onPress={() => navigation.navigate("SelectVehicle")}
                    />
                )
            ]}
        />
    );
}



export default React.memo(InfoAddressComponent);
import React, { useState, useEffect } from "react";
import { Image, Stack, Text, Icon, FlatList } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import OccurrenceRegisterContainer from "./OccurrenceRegisterContainer";
import HeadingDefault from "../../../Components/HeadingDefault";
import IVehiclePayload, { VehicleTypes } from "../../../Patterns/IVehiclePayload";
import GetVehiclesService from "../../../Services/GetVehiclesService";
import ButtonDefault from "../../../Components/ButtonDefault";


function OccurrenceVehicleComponent(props: any): React.ReactElement{

    const navigation: NavigationProp<any> = useNavigation<any>();

    const [vehicles, setVehicles] = useState<IVehiclePayload[]>([]);

    const [vehicleSelected, setVehicleSelected] = useState<IVehiclePayload | null>(null);


    async function getVehicles(): Promise<void>{
        const vehicles: IVehiclePayload[] = await new GetVehiclesService().execute();

        setVehicles(vehicles);
    }

    function getVehicleType(vehicleType: VehicleTypes): string{
        return vehicleType === VehicleTypes.CAR ? "Carro" : "Moto"
    }

    useEffect(()=>{
        getVehicles()
    }, []);

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
                    <HeadingDefault fontSize={30} textAlign="left">
                        Agora, escolha {" "}
                        <HeadingDefault color="primary" fontSize={30}>
                            o veículo {" "}
                        </HeadingDefault>
                        que {" "}
                        <HeadingDefault color="primary" fontSize={30}>
                            sofreu o acidente.
                        </HeadingDefault>
                    </HeadingDefault>

                    <Image 
                        source={require("../../../../assets/car.png")}
                        width={200}
                        height={150}
                        alt="map"
                    />
                </Stack>
            )}

            ComponentCenter={(
                    <Stack width="full" space={10}>
                        {
                            vehicles.map((vehicle) => {

                                let background: string = "transparent";
        
                                let color: string = "white";
        
                                let selected = false;
        
                                if(vehicleSelected && vehicleSelected.plate === vehicle.plate){
                                    selected = true;
        
                                    background = "primary";
        
                                    color = "secondary";
                                }
        
                                    return (
                                        <Stack
                                            width="full"
                                            direction="row"
                                            justifyContent="space-between"
                                            padding={5}
                                            borderWidth={2}
                                            borderColor="primary"
                                            borderRadius={10}
                                            backgroundColor={background}
                                            onTouchEndCapture={()=> {
                                                setVehicleSelected(
                                                    selected ? null : vehicle
                                                );
                                            }}
                                        >
                                            {
                                                selected ? (
                                                    <Icon 
                                                        as={<FontAwesome5 name="check"/>}
                                                        size="md"
                                                    />
                                                ) : null
                                            }
                                            <Text color={color} fontWeight={700}>
                                                Placa: {` `}
                                                <Text fontWeight="normal">
                                                    {vehicle.plate}
                                                </Text>
                                            </Text>
                                            <Text color={color} fontWeight={700}>
                                                Tipo Veículo: {` `}
                                                <Text fontWeight="normal">
                                                    {getVehicleType(vehicle.vehicleType)}
                                                </Text>
                                            </Text>
                                        </Stack>
                                    );
                                })
                        }
                    </Stack>
            )}

            ComponentBottom={
                vehicleSelected
                    ? [(
                        <ButtonDefault 
                            text="Continuar"
                            TextProps={{
                                fontSize: 18
                            }}
                            rightIcon={
                                <Icon 
                                    as={<FontAwesome5 name="arrow-right" />}
                                    size="xl"
                                />
                            }
                            onTouchStart={()=>{
                                navigation.navigate("OccurrenceAccessCamera");
                            }}
                        />
                    )]
                            
                    : undefined
            }
        >
            
            
        </OccurrenceRegisterContainer>
    );
}


export default React.memo(OccurrenceVehicleComponent);
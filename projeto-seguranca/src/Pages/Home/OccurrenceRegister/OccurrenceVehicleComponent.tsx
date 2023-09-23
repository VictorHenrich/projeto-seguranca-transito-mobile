import React, { useState, useEffect, useContext } from "react";
import { Image, Stack, Text, Icon } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import OccurrenceRegisterContainer from "./OccurrenceRegisterContainer";
import HeadingDefault from "../../../Components/HeadingDefault";
import IVehiclePayload, { VehicleTypes } from "../../../Patterns/IVehiclePayload";
import GetVehiclesService from "../../../Services/App/GetVehiclesService";
import ButtonDefault from "../../../Components/ButtonDefault";
import { IOccurrenceRegisterContext, OccurrenceRegisterContext } from "./OccurrenceRegisterProvider";


function OccurrenceVehicleComponent(props: any): React.ReactElement{

    const navigation: NavigationProp<any> = useNavigation<any>();

    const [vehicles, setVehicles] = useState<IVehiclePayload[]>([]);

    const {
        setOccurrence,
        occurrence
    }: IOccurrenceRegisterContext = useContext<IOccurrenceRegisterContext>(OccurrenceRegisterContext);


    async function getVehicles(): Promise<void>{
        const vehicles: IVehiclePayload[] = await new GetVehiclesService().execute();

        setVehicles(vehicles);
    }

    function getVehicleType(vehicleType: VehicleTypes): string{
        return vehicleType === VehicleTypes.CAR ? "Carro" : "Moto"
    }

    function setVehicleSelected(vehicle?: IVehiclePayload): void{
        setOccurrence({
            ...occurrence,
            vehicle
        });
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
                            vehicles.map((vehicle, index) => {

                                let background: string = "transparent";
        
                                let color: string = "white";
        
                                let selected = false;
        
                                if(occurrence.vehicle && occurrence.vehicle.plate === vehicle.plate){
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
                                            key={index}
                                            backgroundColor={background}
                                            onTouchEndCapture={()=> {
                                                setVehicleSelected(
                                                    selected ? undefined : vehicle
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
                occurrence.vehicle
                    ? [(
                        <ButtonDefault
                            key="button-continue"
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
                                navigation.navigate("OccurrenceCaptureEvidence");
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
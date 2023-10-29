import React, { useState, useEffect } from "react";
import { Stack, Divider, Icon, Text } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IVehiclePayload, { VehicleTypes } from "../../../../Patterns/IVehiclePayload";
import CheckboxDefault from "../../../../Components/CheckboxDefault";
import { colors, vehicleTypes } from "../../../../Utils/Constants";
import ContainerDefault from "../../../../Components/ContainerDefault";
import ButtonDefault from "../../../../Components/ButtonDefault";
import HeadingDefault from "../../../../Components/HeadingDefault";
import InputFormDefault from "../../../../Components/InputFormDefault";
import SelectFormDefault from "../../../../Components/SelectFormDefault";

export interface InfoVehicleComponentProps{
    vehicle?: IVehiclePayload,
    onChange: (vehicle: IVehiclePayload) => void
    onCancel: () => void
}

export default function InfoVehicleComponent({
    vehicle,
    onChange,
    onCancel
}: InfoVehicleComponentProps): React.ReactElement{

    const vehicle_: IVehiclePayload = {
        plate: "",
        renavam: "",
        uuid: "",
        vehicleType: VehicleTypes.CAR
    }

    const [vehicleSelected, setVehicleSelected] = useState<IVehiclePayload>(vehicle_);
    const [serviceName, setServiceName] = useState("Cadastrar");

    useEffect(() => {
        setVehicleSelected(vehicle || vehicle_);
        setServiceName(!vehicle ? "Cadastrar" : "Alterar");
    }, [vehicle]);
    
    function changeVehicle(vehicle: Partial<IVehiclePayload>){
        setVehicleSelected({...vehicleSelected, ...vehicle});
    }

    return (
        <ContainerDefault>
            <Stack
                width="full"
                space={2}
                direction="column"
                paddingBottom={5}
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
                        {serviceName.toUpperCase()} VEÍCULO
                    </Text>
                    <Icon
                        size="4xl"
                        as={<MaterialCommunityIcons name="car-cog"/>}
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
                direction="column" 
                space={10} 
                width="full"
                minHeight={500}
                paddingTop={5}
                paddingBottom={5}
            >
                <InputFormDefault
                    label="Placa"
                    InputDefaultProps={{
                        value: `${vehicleSelected.plate}`,
                        onChangeText: (value: string) => {
                            changeVehicle({
                                plate: value
                            });
                        }
                    }}
                />
                <InputFormDefault 
                    label='Renavam'
                    InputDefaultProps={{
                        value: `${vehicleSelected.plate}`,
                        onChangeText: (value: string) => {
                            changeVehicle({
                                renavam: value
                            });
                        }
                    }}
                />
                <SelectFormDefault
                    label="Tipo do veículo"
                    selectDefaultProps={{
                        selectedValue: vehicleSelected.vehicleType,
                        itens: vehicleTypes,
                        onValueChange: (value: string) => {
                            changeVehicle({ vehicleType: value });
                        }
                    }}
                />
                <InputFormDefault
                    label='Modelo (Opcional)'
                    InputDefaultProps={{
                        value: vehicleSelected.model || '',
                        onChangeText: (value: string) => {
                            changeVehicle({
                                model: value
                            });
                        }
                    }}
                />
                <InputFormDefault
                    label='Ano (Opcional)'
                    InputDefaultProps={{
                        value: `${vehicleSelected.year || ''}`,
                        onChangeText: (value: string) => {
                            changeVehicle({
                                model: value
                            });
                        }
                    }}
                />
                <SelectFormDefault 
                    label="Cor (Opcional)"
                    selectDefaultProps={{
                        selectedValue: vehicleSelected.color || '',
                        itens: colors,
                        onValueChange: (value: string) => {
                            changeVehicle({ color: value });
                        }
                    }}
                />
                <CheckboxDefault 
                    label="Possuí seguro?" 
                    value="PossuiCarro"
                    isChecked={vehicleSelected.haveSafe || false}
                    onChange={(isSelected: boolean) => {
                        changeVehicle({
                            haveSafe: isSelected
                        });
                    }}
                />
            </Stack>
            <Divider backgroundColor="black"/>
            <Stack
                width="full"
                height={100}
                paddingTop={10}
                space={5}
                direction="row"
                justifyContent="flex-end"
            >
                <ButtonDefault
                    width={100}
                    text={serviceName}
                    onPress={() => onChange(vehicleSelected)}
                />
                <ButtonDefault 
                    width={100}
                    text="Voltar"
                    backgroundColor="red"
                    onPress={onCancel}
                />
            </Stack>
        </ContainerDefault>
    );
}
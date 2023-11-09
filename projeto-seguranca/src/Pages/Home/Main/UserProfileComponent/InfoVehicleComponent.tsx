import React, { useState, useEffect } from "react";
import { Stack } from "native-base";
import IVehiclePayload, { VehicleTypes } from "../../../../Patterns/IVehiclePayload";
import CheckboxDefault from "../../../../Components/CheckboxDefault";
import { colors, vehicleTypes } from "../../../../Utils/Constants";
import InputFormDefault from "../../../../Components/InputFormDefault";
import SelectFormDefault from "../../../../Components/SelectFormDefault";
import ModalDefault, { ModalDefaultProps } from "../../../../Components/ModalDefault";

export interface InfoVehicleComponentProps extends Omit<ModalDefaultProps, "heading" | "onConfirm">{
    vehicle?: IVehiclePayload,
    onChange: (vehicle: IVehiclePayload) => void
}

export default function InfoVehicleComponent({
    vehicle,
    onChange,
    open,
    ...props
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
        <ModalDefault 
            heading={`${serviceName} Veículo`}
            onConfirm={() => onChange(vehicleSelected)}
            open={open}
            {...props}
        >
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
        </ModalDefault>
    );
}
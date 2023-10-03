import React, { useState, useEffect } from "react";
import { Stack } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import InputDefault from "../../../../Components/InputDefault";
import IVehiclePayload, { VehicleTypes } from "../../../../Patterns/IVehiclePayload";
import SelectDefault from "../../../../Components/SelectDefault";
import CheckboxDefault from "../../../../Components/CheckboxDefault";
import { colors, vehicleTypes } from "../../../../Utils/Constants";
import ModalDefault, { ModalDefaultProps } from "../../../../Components/ModalDefault";

export interface InfoVehicleComponentProps extends Partial<ModalDefaultProps>{
    vehicle?: IVehiclePayload,
    onChange: (vehicle: IVehiclePayload) => void
}

export default function InfoVehicleComponent({
    vehicle,
    onChange,
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
            ButtonConfirmProps={{
                text: serviceName
            }}
            onConfirm={()=> onChange(vehicleSelected)}
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
                <InputDefault
                    placeholder='Placa'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={`${vehicleSelected.plate}`}
                    onChangeText={(value) => {
                        changeVehicle({
                            plate: value
                        });
                    }}
                />
                <InputDefault 
                    placeholder='Renavam'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    onChangeText={(value) => {
                        changeVehicle({
                            renavam: value
                        });
                    }}
                    value={vehicleSelected.renavam}
                />
                <SelectDefault 
                    placeholder='Tipo do veículo'
                    selectedValue={vehicleSelected.vehicleType}
                    itens={vehicleTypes}
                    onValueChange={(value) => {
                        changeVehicle({
                            vehicleType: value
                        });
                    }}
                />
                <InputDefault 
                    placeholder='Modelo (Opcional)'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={vehicleSelected.model || ''}
                    onChangeText={(value) => {
                        changeVehicle({
                            model: value
                        });
                    }}
                />
                <InputDefault 
                    placeholder='Ano (Opcional)'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={`${vehicleSelected.year || ''}`}
                    onChangeText={(value) => {
                        changeVehicle({
                            year: value
                        });
                    }}
                />
                <SelectDefault 
                    placeholder='Cor (Opcional)'
                    selectedValue={vehicleSelected.color || ''}
                    itens={colors}
                    onValueChange={(value) => {
                        changeVehicle({
                            color: value
                        });
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
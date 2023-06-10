import {useContext} from "react";
import {
    Stack,
    Icon,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { ContextRegister, IContextRegister } from "./RegisterProvider";
import InputDefault from '../../Components/InputDefault';
import ButtonDefault from "../../Components/ButtonDefault";
import ComponentContainerRegister from "./ComponentContainerRegister";
import CheckboxDefault from "../../Components/CheckboxDefault";
import { UserVehiclePayload } from "../../Services/UserCreateService";
import SelectDefault from "../../Components/SelectDefault";




export default function ComponentRegisterVehicle(props: any){

    const colors = [
        {text: "PRETO"},
        {text: "BRANCO"},
        {text: "LARANJA"},
        {text: "AMARELO"},
        {text: "VERMELHO"},
        {text: "PRATA"},
        {text: "DOURADO"},
        {text: "LARANJA"},
        {text: "BEGE"},
    ]

    const {
        setUserPayload,
        userPayload
    } = useContext<IContextRegister>(ContextRegister);


    function changeVehicle(vehicleProps: Partial<UserVehiclePayload>){
        setUserPayload({
            ...userPayload,
            vehicles: [
                {
                    ...userPayload.vehicles[0],
                    ...vehicleProps
                }
            ]
        });
    }

    return (
        <ComponentContainerRegister 
            heading="Vamos registrar seu primeiro veículo."
            minHeightContainer={1200}
            navigation={props.navigation}
        >
            <Stack 
                direction="column" 
                space={10} 
                width="full"
            >
                <InputDefault
                    placeholder='Placa'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={userPayload.vehicles[0].plate}
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
                    value={userPayload.vehicles[0].renavam}
                />
                <InputDefault 
                    placeholder='Modelo (Opcional)'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={userPayload.vehicles[0].model}
                    onChangeText={(value) => {
                        changeVehicle({
                            model: value
                        });
                    }}
                />
                <InputDefault 
                    placeholder='Ano (Opcional)'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={userPayload.vehicles[0].year || ''}
                    onChangeText={(value) => {
                        changeVehicle({
                            year: value
                        });
                    }}
                />
                <SelectDefault 
                    placeholder='Cor (Opcional)'
                    selectedValue={userPayload.vehicles[0].color}
                    selectItem={{
                        itens: colors
                    }}
                    onValueChange={(value) => {
                        changeVehicle({
                            color: value
                        });
                    }}
                />
                <CheckboxDefault 
                    label="Possuí seguro?" 
                    value="PossuiCarro"
                    isChecked={userPayload.vehicles[0].haveSafe || false}
                    onChange={(isSelected: boolean) => {
                        changeVehicle({
                            haveSafe: isSelected
                        });
                    }}
                />
            </Stack>
            <Stack
                direction="column"
                width="full"
                space={10}
                alignItems="center"
            >
                <ButtonDefault 
                    text="Próximo"
                    rightIcon={
                        <Icon
                            size="lg"
                            as={<FontAwesome name="arrow-right"/>}
                        />
                    }
                    onTouchStart={()=>{
                        props.navigation.navigate("RegisterAccess");
                    }}
                />
                <ButtonDefault 
                    text="Anterior"
                    leftIcon={
                        <Icon
                            size="lg"
                            as={<FontAwesome name="arrow-left"/>}
                        />
                    }
                    onTouchStart={()=> {
                        props.navigation.navigate("RegisterAddress");
                    }}
            />
            </Stack>
            
            
        </ComponentContainerRegister>
    )
}
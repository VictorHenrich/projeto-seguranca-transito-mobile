import {useContext} from "react";
import {
    Stack,
    Icon,
    Box
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { ContextRegister, IContextRegister } from "./RegisterProvider";
import InputDefault from '../../Components/InputDefault';
import ButtonDefault from "../../Components/ButtonDefault";
import ContainerRegisterComponent from "./ContainerRegisterComponent";
import CheckboxDefault from "../../Components/CheckboxDefault";
import IVehiclePayload from "../../Patterns/IVehiclePayload";
import SelectDefault from "../../Components/SelectDefault";
import HeadingDefault from "../../Components/HeadingDefault";
import { colors } from "../../Utils/Constants";




export default function InfoVehicleComponent(props: any){

    const navigation: NavigationProp<any> = useNavigation<any>();

    const {
        setUserPayload,
        userPayload,
        setPageIndex
    } = useContext<IContextRegister>(ContextRegister);

    navigation.addListener("focus", ()=> setPageIndex(3));


    function changeVehicle(vehicleProps: Partial<IVehiclePayload>){
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
        <ContainerRegisterComponent
            heading={(
                <Stack 
                    width="full"
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    space={10}
                >
                    <Icon 
                        as={<FontAwesome5 name="car"/>}
                        size="4xl"
                        color="primary"
                    />
                    <Box maxWidth="70%">
                        <HeadingDefault textAlign="left" fontSize={25}>
                            Vamos registrar seu {` `}
                            <HeadingDefault color="primary" fontSize={25}>
                                primeiro veículo
                            </HeadingDefault>
                        </HeadingDefault>
                    </Box>
                </Stack>
            )}
            minHeight={1200}
        >
            <Stack 
                direction="column" 
                space={10} 
                width="full"
            >
                <InputDefault
                    placeholder='Placa'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={`${userPayload.vehicles[0].plate}`}
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
                    value={`${userPayload.vehicles[0].model}`}
                    onChangeText={(value) => {
                        changeVehicle({
                            model: value
                        });
                    }}
                />
                <InputDefault 
                    placeholder='Ano (Opcional)'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={`${userPayload.vehicles[0].year}`}
                    onChangeText={(value) => {
                        changeVehicle({
                            year: value
                        });
                    }}
                />
                <SelectDefault 
                    placeholder='Cor (Opcional)'
                    selectedValue={userPayload.vehicles[0].color}
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
                        props.navigation.navigate("InfoAccess");
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
                        props.navigation.navigate("InfoAddress");
                    }}
            />
            </Stack>
            
            
        </ContainerRegisterComponent>
    )
}
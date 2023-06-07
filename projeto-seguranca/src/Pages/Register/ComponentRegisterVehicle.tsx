import {useContext} from "react";
import {
    Stack,
    Icon
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { ContextRegister, IContextRegister } from "./RegisterProvider";
import InputDefault from '../../Components/InputDefault';
import ButtonDefault from "../../Components/ButtonDefault";
import ComponentContainerRegister from "./ComponentContainerRegister";




export default function ComponentRegisterVehicle(props: any){

    const {
        setUserPayload,
        userPayload
    } = useContext<IContextRegister>(ContextRegister);

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
                    value={userPayload.name}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            name: value
                        })
                    }}
                />
                <InputDefault 
                    placeholder='Renavam'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            document: value
                        })
                    }}
                />
                <InputDefault 
                    placeholder='Modelo (Opcional)'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            documentRg: value
                        })
                    }}
                />
                <InputDefault 
                    placeholder='Ano (Opcional)'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            documentRg: value
                        })
                    }}
                />
                <InputDefault 
                    placeholder='Cor (Opcional)'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                />
            </Stack>
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
            
        </ComponentContainerRegister>
    )
}
import React, {useContext} from "react";
import {
    Stack,
    Icon,
    Box
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import InputDefault from '../../Components/InputDefault';
import ButtonDefault from "../../Components/ButtonDefault";
import SelectDefault from "../../Components/SelectDefault";
import { ContextRegister, IContextRegister } from "./RegisterProvider";
import ContainerRegisterComponent from "./ContainerRegisterComponent";
import IAddressPayload from "../../Patterns/IAddressPayload";
import HeadingDefault from "../../Components/HeadingDefault";
import { states } from "../../Utils/Constants";


function InfoAddressComponent(props: any): React.ReactElement{
    const {
        setUserPayload,
        userPayload,
        setPageIndex
    } = useContext<IContextRegister>(ContextRegister);

    const navigation: NavigationProp<any> = useNavigation<any>();

    navigation.addListener("focus", ()=> setPageIndex(2));

    function changeAddress(addressProps: Partial<IAddressPayload>){
        setUserPayload({
            ...userPayload,
            address: {
                ...userPayload.address,
                ...addressProps
            }
        })
    }

    return (
        <ContainerRegisterComponent 
            minHeight={1200}
            heading={(
                <Stack 
                    width="full"
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    space={10}
                >
                    <Icon 
                        as={<FontAwesome5 name="map-marked-alt"/>}
                        size="4xl"
                        color="primary"
                    />
                    <Box maxWidth="70%">
                        <HeadingDefault textAlign="left" fontSize={25}>
                            Agora precisamos dos dados de seu {` `}
                            <HeadingDefault color="primary" fontSize={25}>Endereço Atual</HeadingDefault>
                        </HeadingDefault>
                    </Box>
                </Stack>
            )}
        >
            <Stack 
                direction="column" 
                space={10} 
                width="full"
            >   
                <InputDefault 
                    placeholder='CEP'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={`${userPayload.address.zipcode}`}
                    onChangeText={(value) => {
                        changeAddress({
                            zipcode: value
                        });
                    }}
                />
                <SelectDefault 
                    placeholder='UF'
                    selectedValue={userPayload.address.state}
                    itens={states}
                    onValueChange={(value) => {
                        changeAddress({
                            state: value
                        });
                    }}
                />
                <InputDefault 
                    placeholder='Cidade'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={`${userPayload.address.city}`}
                    onChangeText={(value) => {
                        changeAddress({
                            city: value
                        });
                    }}
                />
                <InputDefault 
                    placeholder='Bairro'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={`${userPayload.address.district}`}
                    onChangeText={(value) => {
                        changeAddress({
                            district: value
                        });
                    }}
                />
                <InputDefault 
                    placeholder='Logradouro'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={userPayload.address.street}
                    onChangeText={(value) => {
                        changeAddress({
                            street: value
                        });
                    }}
                />
                <InputDefault 
                    placeholder='Numero'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={`${userPayload.address.number}`}
                    onChangeText={(value) => {
                        changeAddress({
                            number: value
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
                            as={<FontAwesome name="arrow-right"/>}
                            size="lg"
                        />
                    }
                    onTouchStart={()=> {
                        navigation.navigate("InfoVehicle");
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
                        navigation.navigate("InfoPerson");
                    }}
                />
            </Stack>
        </ContainerRegisterComponent>
    )
}


export default React.memo(InfoAddressComponent);
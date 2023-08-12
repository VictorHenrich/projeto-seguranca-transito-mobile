import React, {useContext} from "react";
import {
    Stack,
    Icon
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


import InputDefault from '../../Components/InputDefault';
import ButtonDefault from "../../Components/ButtonDefault";
import SelectDefault,  { SelectDefaultItensProps } from "../../Components/SelectDefault";
import { ContextRegister, IContextRegister } from "./RegisterProvider";
import ComponentContainerRegister from "./ComponentContainerRegister";
import { UserAddressPayload } from "../../Services/CreateUserService";
import HeadingDefault from "../../Components/HeadingDefault";


const states = [
    {text: "SC"},
    {text: "RS"},
    {text: "PR"},
    {text: "SP"},
    {text: "RJ"},
]


function ComponentRegisterAddress(props: any): React.ReactElement{
    const {
        setUserPayload,
        userPayload
    } = useContext<IContextRegister>(ContextRegister);


    function changeAddress(addressProps: Partial<UserAddressPayload>){
        setUserPayload({
            ...userPayload,
            address: {
                ...userPayload.address,
                ...addressProps
            }
        })
    }

    return (
        <ComponentContainerRegister 
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
                        size="xl"
                        color="primary"
                    />
                    <HeadingDefault textAlign="left">
                        Agora precisamos dos dados de seu {` `}
                        <HeadingDefault color="primary">Endereço Atual</HeadingDefault>
                    </HeadingDefault>
                </Stack>
            )}
            navigation={props.navigation}
            minHeightContainer={1200}
        >
            <Stack 
                direction="column" 
                space={10} 
                width="full"
            >
                <SelectDefault 
                    placeholder='UF'
                    selectedValue={userPayload.address.state}
                    selectItem={{
                        itens: states
                    }}
                    onValueChange={(value) => {
                        changeAddress({
                            state: value
                        });
                    }}
                />
                <InputDefault 
                    placeholder='Cidade'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={userPayload.address.city}
                    onChangeText={(value) => {
                        changeAddress({
                            city: value
                        });
                    }}
                />
                <InputDefault 
                    placeholder='Bairro'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={userPayload.address.district}
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
                    value={userPayload.address.number || ''}
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
                        props.navigation.navigate("RegisterVehicle");
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
                        props.navigation.navigate("RegisterPerson");
                    }}
                />
            </Stack>
        </ComponentContainerRegister>
    )
}


export default React.memo(ComponentRegisterAddress);
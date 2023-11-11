import {useContext} from "react";
import {
    Stack,
    Icon,
    Box
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ContextRegister, IContextRegister } from "./RegisterProvider";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import InputDefault from '../../Components/InputDefault';
import ButtonDefault from "../../Components/ButtonDefault";
import SelectDefault from "../../Components/SelectDefault";
import ContainerRegisterComponent from "./ContainerRegisterComponent";
import HeadingDefault from "../../Components/HeadingDefault";
import { issueStates } from "../../Utils/Constants";
import DatePickDefault from "../../Components/DatePickDefault";


export default function InfoPersonComponent(props: any){

    const {
        setUserPayload,
        userPayload,
        setPageIndex
    } = useContext<IContextRegister>(ContextRegister);

    const navigation: NavigationProp<any> = useNavigation<any>();

    navigation.addListener("focus", ()=> setPageIndex(1));

    return (
        <ContainerRegisterComponent 
            heading={(
                <Stack
                    width="full"
                    direction="row"
                    space={10}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Icon 
                        as={<FontAwesome5 name="user-plus"/>}
                        size="4xl"
                        color="primary"
                    />
                    <Box maxWidth="70%">
                        <HeadingDefault textAlign="left" fontSize={25}>
                            Vamos começar com as informações da sua {` `}
                            <HeadingDefault color="primary" fontSize={25}>Carteira Pessoal</HeadingDefault>
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
                    placeholder='Nome'
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
                    placeholder='CPF'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={userPayload.documentCpf}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            documentCpf: value
                        })
                    }}
                />
                <InputDefault 
                    placeholder='RG'
                    icon={<MaterialCommunityIcons name="format-text"/>}
                    value={userPayload.documentRg}
                    onChangeText={(value) => {
                        setUserPayload({
                            ...userPayload,
                            documentRg: value
                        })
                    }}
                />
                <SelectDefault 
                    placeholder='Estado Emissor'
                    selectedValue={userPayload.issuerState}
                    itens={issueStates}
                    onValueChange={(itemValue) => {
                        setUserPayload({
                            ...userPayload,
                            issuerState: itemValue
                        })
                    }}
                />
                <DatePickDefault 
                    value={new Date()}
                />
                {/* <InputDefault 
                    placeholder='Data de nascimento'
                    icon={<MaterialIcons name="date-range"/>}
                /> */}
            </Stack>
            <ButtonDefault 
                text="Próximo"
                rightIcon={
                    <Icon 
                        as={<FontAwesome name="arrow-right"/>}
                        size="lg"
                    />
                }
                onTouchStart={() => {
                    navigation.navigate("InfoAddress");
                }}
            />
        </ContainerRegisterComponent>
    )
}
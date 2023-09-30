import React, { useContext } from "react";
import { Image, Icon, Center } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import ContainerRegisterComponent from "./ContainerRegisterComponent";
import ButtonDefault from "../../Components/ButtonDefault";
import { ContextRegister, IContextRegister } from "./RegisterProvider";





function FinishRegisterComponent(props: any): React.ReactElement{
    const { setPageIndex } = useContext<IContextRegister>(ContextRegister);

    const navigation: NavigationProp<any> = useNavigation<any>();

    navigation.addListener("focus", ()=> setPageIndex(5));

    return (
        <ContainerRegisterComponent 
            heading="Cadastro Concluido!"
        >
            <Center
                width="full"
                height="50%"
            >
                <Image
                    width="full"
                    height="full"
                    source={require("../../../assets/success.png")}
                    alt="success"
                />
            </Center>
            <ButtonDefault 
                text=""
                rightIcon={
                    <Icon as={<FontAwesome name="check"/>}/>
                }
            />
        </ContainerRegisterComponent>
    )
}


export default React.memo(FinishRegisterComponent);
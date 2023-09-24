import React from "react";
import { Image, Icon, Center } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ContainerRegisterComponent from "./ContainerRegisterComponent";
import ButtonDefault from "../../Components/ButtonDefault";





function FinishRegisterComponent(props: any): React.ReactElement{
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
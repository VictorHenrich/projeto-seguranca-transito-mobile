import React from "react";
import { Stack, Image } from "native-base";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ButtonDefault from "../../../../Components/ButtonDefault";
import ContainerDefault from "../../../../Components/ContainerDefault";


function OccurrenceRegisterComponent(props: any): React.ReactElement{
    const navigation: NavigationProp<any> = useNavigation<any>();

    return (
        <ContainerDefault backgroundColor="secondary">
            <Stack
                width="full"
                alignItems="center"
                space={10}
            >   
                <Image 
                    source={require("../../../../../assets/carro_batendo.png")}
                    width={300}
                    height={300}
                    alt="car"
                />
                <ButtonDefault 
                    text="Começar processo de registro de ocorrência"
                    shadow="5"
                    onPress={()=> navigation.navigate("OccurrenceProcessRegister")}
                />
            </Stack>
        </ContainerDefault>
    )
}


export default React.memo(OccurrenceRegisterComponent);
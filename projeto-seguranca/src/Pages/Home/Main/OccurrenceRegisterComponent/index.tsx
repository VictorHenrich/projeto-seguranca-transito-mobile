import React from "react";
import { Stack, Image } from "native-base";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ButtonDefault from "../../../../Components/ButtonDefault";
import ContainerDefault from "../../../../Components/ContainerDefault";


function OccurrenceRegisterComponent(props: any): React.ReactElement{
    const navigation: NavigationProp<any> = useNavigation<any>();

    return (
        <ContainerDefault 
            backgroundColor="secondary"
            haveScrool={false}
        >
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
                    padding={5}
                    text="Iniciar"
                    shadow="5"
                    TextProps={{
                        fontSize: 30
                    }}
                    onPress={()=> navigation.navigate("OccurrenceProcessRegister")}
                />
            </Stack>
        </ContainerDefault>
    )
}


export default React.memo(OccurrenceRegisterComponent);
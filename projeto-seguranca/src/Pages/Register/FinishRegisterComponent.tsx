import React, { useContext } from "react";
import { Image, Icon, Center, Stack, Box } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import ContainerRegisterComponent from "./ContainerRegisterComponent";
import { ContextRegister, IContextRegister } from "./RegisterProvider";
import HeadingDefault from "../../Components/HeadingDefault";





function FinishRegisterComponent(props: any): React.ReactElement{
    const { setPageIndex } = useContext<IContextRegister>(ContextRegister);

    const navigation: NavigationProp<any> = useNavigation<any>();

    navigation.addListener("focus", ()=> setPageIndex(5));

    return (
        <ContainerRegisterComponent 
            heading={
                <Stack
                    width="full"
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    space={10}
                >
                    <Icon 
                        as={<FontAwesome name="check"/>}
                        size="4xl"
                        color="primary"
                    />
                    <Box maxWidth="70%">
                        <HeadingDefault textAlign="left" fontSize={25}>
                            Seu 
                            <HeadingDefault color="primary" fontSize={25}>
                                cadastro
                            </HeadingDefault> 
                            foi realizado com {` `}
                            <HeadingDefault color="primary" fontSize={25}>
                                sucesso!
                            </HeadingDefault>
                        </HeadingDefault>
                    </Box>
                </Stack>
            }
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
        </ContainerRegisterComponent>
    )
}


export default React.memo(FinishRegisterComponent);
import React from "react";
import { Stack, Icon, IStackProps } from "native-base";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import BackgroundApp from "../../../Components/BackgroundApp";
import ButtonDefault from "../../../Components/ButtonDefault";


export interface OccurrenceRegisterContainerProps extends IStackProps{
    ComponentTop: React.ReactElement,
    ComponentCenter: React.ReactElement,
    ComponentBottom?: React.ReactElement[],
    showBackButton?: boolean
}


function OccurrenceRegisterContainer({
    ComponentCenter,
    ComponentTop,
    ComponentBottom,
    showBackButton = true,
    ...props
}: OccurrenceRegisterContainerProps): React.ReactElement{

    const navigation: NavigationProp<any> = useNavigation<any>();

    return (
        <>
            <BackgroundApp source={require("../../../../assets/background_occurrence.png")}/>
            <Stack 
                {...props}
                width="full"
                height="full"
                justifyContent="space-between"
                alignItems="center"
                padding={5}
                paddingTop={10}
                space={10}
            >
                    {ComponentTop}
                    
                    {ComponentCenter}

                    <Stack 
                        width="full" 
                        space={5}
                        alignItems="center"
                    >
                        {ComponentBottom}

                        {
                            showBackButton && (
                                <ButtonDefault 
                                    text="Voltar"
                                    backgroundColor="gray"
                                    TextProps={{
                                        fontSize: 18
                                    }}
                                    rightIcon={
                                        <Icon 
                                            as={<FontAwesome5 name="arrow-left"/>}
                                            size="xl"
                                        />
                                    }
                                    onPress={() => navigation.goBack()}
                                />
                            )
                        }

                        <ButtonDefault 
                            text="Sair da ocorrência"
                            backgroundColor="red"
                            TextProps={{
                                fontSize: 18
                            }}
                            rightIcon={
                                <Icon 
                                    as={<FontAwesome5 name="sign-out-alt"/>}
                                    size="xl"
                                />
                            }
                        />
                    </Stack>
            </Stack>
        </>
    )
}


export default React.memo(OccurrenceRegisterContainer);
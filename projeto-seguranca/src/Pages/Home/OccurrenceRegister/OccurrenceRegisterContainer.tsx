import React from "react";
import { Stack, Icon, IStackProps } from "native-base";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import BackgroundApp from "../../../Components/BackgroundApp";
import ButtonDefault from "../../../Components/ButtonDefault";
import ContainerDefault, { ContainerDefaultProps } from "../../../Components/ContainerDefault";


export interface OccurrenceRegisterContainerProps extends ContainerDefaultProps{
    ComponentTop: React.ReactElement,
    ComponentCenter: React.ReactElement,
    ComponentBottom?: React.ReactNode[],
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
            <ContainerDefault
                haveScrool={false}
                {...props}
            >
                    <Stack
                        width="full"
                        height="full"
                        justifyContent="space-between"
                        space={10}
                        alignItems="center"
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
            </ContainerDefault>
        </>
    )
}


export default React.memo(OccurrenceRegisterContainer);
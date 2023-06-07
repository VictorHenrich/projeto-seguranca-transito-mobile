import { ReactElement } from "react";
import { Text } from "native-base";

import BackgroundApp from "../../Components/BackgroundApp";
import HeadingDefault from "../../Components/HeadingDefault";
import ContainerDefault, {ContainerDefaultProps} from "../../Components/ContainerDefault";
import ComponentPositionStep from "./ComponentPositionStep";



export interface ComponentContainerRegisterProps extends Partial<ContainerDefaultProps>{
    heading: string
}



export default function ComponentContainerRegister({
    heading,
    minHeightContainer = 1000,
    ...props
}: ComponentContainerRegisterProps){
    return (
        <>
            <BackgroundApp />
            <ContainerDefault
                display="flex"
                justifyContent="space-evenly"
                padding={10}
                overflowY="auto"
                minHeightContainer={minHeightContainer}
            >
                <HeadingDefault textAlign="center">
                    {heading}
                </HeadingDefault>
                <ComponentPositionStep />

                {props.children}

                <Text color="primary" fontWeight={700}>Voltar ao inicio</Text>
            </ContainerDefault>
        </>
    )
}
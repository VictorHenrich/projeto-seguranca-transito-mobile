import { Text, Link } from "native-base";

import BackgroundApp from "../../Components/BackgroundApp";
import HeadingDefault from "../../Components/HeadingDefault";
import ContainerDefault, {ContainerDefaultProps} from "../../Components/ContainerDefault";
import ComponentPositionStep from "./ComponentPositionStep";
import AlertDefault, { AlertDefaultProps } from "../../Components/AlertDefault";


export interface ComponentContainerRegisterProps extends Partial<ContainerDefaultProps>{
    heading: string,
    navigation?: any,
    AlertProps?: AlertDefaultProps
}



export default function ComponentContainerRegister({
    heading,
    navigation,
    AlertProps = {
        open: false,
        stateOpen: (open: boolean) => null,
        status: "info",
        text: "",
    },
    minHeightContainer = 1000,
    ...props
}: ComponentContainerRegisterProps){;

    return (
        <>
            <BackgroundApp />
            <ContainerDefault
                display="flex"
                justifyContent="space-between"
                padding={10}
                overflowY="auto"
                minHeightContainer={minHeightContainer}
            >
                <HeadingDefault textAlign="center">
                    {heading}
                </HeadingDefault>
                <ComponentPositionStep />

                {props.children}

                {navigation && (
                    <Link
                        onTouchStart={() =>{
                            if(navigation)
                                navigation.navigate("RegisterPerson");
                        }}
                    >
                        <Text
                            color="primary" 
                            fontWeight={700}
                        >
                            Voltar ao inicio
                        </Text>
                    </Link>
                )}
                
            </ContainerDefault>
            <AlertDefault
                {...AlertProps}
            />
        </>
    )
}
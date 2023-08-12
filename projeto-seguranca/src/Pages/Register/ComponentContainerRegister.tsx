import { Text, Link } from "native-base";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import BackgroundApp from "../../Components/BackgroundApp";
import ContainerDefault, {ContainerDefaultProps} from "../../Components/ContainerDefault";
import ComponentPositionStep from "./ComponentPositionStep";
import AlertDefault, { AlertDefaultProps } from "../../Components/AlertDefault";


export interface ComponentContainerRegisterProps extends Partial<ContainerDefaultProps>{
    heading: any,
    AlertProps?: AlertDefaultProps
}



export default function ComponentContainerRegister({
    heading,
    AlertProps = {
        open: false,
        stateOpen: (open: boolean) => null,
        status: "info",
        text: "",
    },
    minHeightContainer = 1000,
    ...props
}: ComponentContainerRegisterProps){
    const navigation: NavigationProp<any> = useNavigation<any>();

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
                {heading}
                <ComponentPositionStep />

                {props.children}

                <Link
                    onTouchStart={() =>{
                        if(navigation.canGoBack())
                            navigation.goBack();
                    }}
                >
                    <Text
                        color="primary" 
                        fontWeight={700}
                    >
                        Voltar ao início
                    </Text>
                </Link>
                
            </ContainerDefault>
            <AlertDefault
                {...AlertProps}
            />
        </>
    )
}
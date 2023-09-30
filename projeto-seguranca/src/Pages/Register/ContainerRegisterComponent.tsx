import { Text, Link } from "native-base";
import { useNavigation, NavigationProp, StackActions } from "@react-navigation/native";

import BackgroundApp from "../../Components/BackgroundApp";
import ContainerDefault, {ContainerDefaultProps} from "../../Components/ContainerDefault";
import PositionStepComponent from "./PositionStepComponent";
import AlertDefault, { AlertDefaultProps } from "../../Components/AlertDefault";


export interface ComponentContainerRegisterProps extends Partial<ContainerDefaultProps>{
    heading: any,
    AlertProps?: AlertDefaultProps
}



export default function ContainerRegisterComponent({
    heading,
    AlertProps = {
        open: false,
        stateOpen: (open: boolean) => null,
        status: "info",
        text: "",
    },
    minHeight = 1000,
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
                minHeight={minHeight}
            >
                {heading}
                <PositionStepComponent />

                {props.children}

                <Link
                    onTouchStart={() =>{
                        navigation.navigate("LoginPage");
                    }}
                >
                    <Text
                        color="primary" 
                        fontWeight={700}
                    >
                        Voltar para o login
                    </Text>
                </Link>
                
            </ContainerDefault>
            <AlertDefault
                {...AlertProps}
            />
        </>
    )
}
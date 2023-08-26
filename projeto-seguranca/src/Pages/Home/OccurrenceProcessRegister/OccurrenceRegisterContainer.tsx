import React from "react";
import { Center, Icon } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import BackgroundApp from "../../../Components/BackgroundApp";
import ContainerDefault, {ContainerDefaultProps} from "../../../Components/ContainerDefault";
import ButtonDefault from "../../../Components/ButtonDefault";


function OccurrenceRegisterContainer(props: ContainerDefaultProps): React.ReactElement{
    return (
        <>
            <BackgroundApp source={require("../../../../assets/background_occurrence.png")}/>
            <Center 
                {...props}
                justifyContent="space-between"
                paddingTop={20}
                paddingBottom={10}
                paddingLeft={5}
                paddingRight={5}
                width="full"
                height="full"
            >
                {props.children}
                    <ButtonDefault 
                        text="Sair da ocorrência"
                        backgroundColor="red"
                        color="secondary"
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
                
            </Center>
        </>
    )
}


export default React.memo(OccurrenceRegisterContainer);
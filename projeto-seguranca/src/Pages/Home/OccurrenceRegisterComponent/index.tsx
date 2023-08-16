import React, { useState,  } from "react";
import { Stack, Image } from "native-base";
import ButtonDefault from "../../../Components/ButtonDefault";
import ContainerDefault from "../../../Components/ContainerDefault";
import StartProcessRegisterOccurrenceComponent from "./Start";



function OccurrenceRegisterComponent(props: any): React.ReactElement{
    const [showOccurrenceRegister, setOccurrenceRegister] = useState<boolean>(false);

    return (
        <>
            {
                !showOccurrenceRegister 
                    ? (
                        <ContainerDefault backgroundColor="secondary">
                        <Stack
                            width="full"
                            alignItems="center"
                            space={10}
                        >   
                            <Image 
                                source={require("../../../../assets/carro_batendo.png")}
                                minWidth={300}
                                minHeight={300}
                                alt="car"
                            />
                            <ButtonDefault 
                                text="Começar processo de registro de ocorrência"
                                shadow="5"
                                onPress={()=> {
                                    setOccurrenceRegister(true);
                                }}
                            />
                        </Stack>
                    </ContainerDefault>
                    )

                    :(
                        <StartProcessRegisterOccurrenceComponent />
                    )
            }
        </>
    )
}


export default React.memo(OccurrenceRegisterComponent);
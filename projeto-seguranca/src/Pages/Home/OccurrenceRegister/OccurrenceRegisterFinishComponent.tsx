import React, { useContext } from "react";
import {Image, Stack, Icon} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import OccurrenceRegisterContainer from "./OccurrenceRegisterContainer";
import ButtonDefault from "../../../Components/ButtonDefault";
import HeadingDefault from "../../../Components/HeadingDefault";
import CreateOccurrenceService from "../../../Services/App/CreateOccurrenceService";
import { IOccurrenceRegisterContext, OccurrenceRegisterContext } from "./OccurrenceRegisterProvider";



function OccurrenceRegisterFinishComponent(props: any){

    const {
        occurrence
    }: IOccurrenceRegisterContext = useContext<IOccurrenceRegisterContext>(OccurrenceRegisterContext);

    async function registerOccurrence(): Promise<void>{
        if(!occurrence.vehicle)
            throw new Error("Nenhum veículo foi selecionado!");

        await new CreateOccurrenceService(occurrence).execute();
    }


    return (
        <OccurrenceRegisterContainer
        
            ComponentTop={(
                <Stack
                    width="full"
                    space={10}
                >
                    <HeadingDefault fontSize={30} textAlign="left">
                        Estamos na {" "}
                        <HeadingDefault color="primary" fontSize={30}>
                            fase final {" "}
                        </HeadingDefault>
                            e gostaríamos de confirmar se você {" "}
                        <HeadingDefault color="primary" fontSize={30}>
                            concorda {" "}
                        </HeadingDefault>
                        em prosseguir com o {" "}
                        <HeadingDefault color="primary" fontSize={30}>
                            cadastro.
                        </HeadingDefault>
                    </HeadingDefault>

                    <Image 
                        source={require("../../../../assets/success.png")}
                        width={500}
                        height={200}
                        alt="map"
                    />
                </Stack>
            )}

            ComponentCenter={(
                <ButtonDefault
                    padding={5}
                    text="Cadastrar"
                    TextProps={{
                        fontSize: 18
                    }}
                    endIcon={
                        <Icon 
                            as={<Ionicons name="add-circle"/>}   
                            size="lg"
                        />
                    }

                    onPress={() => registerOccurrence()}
                /> 
            )}
        />
    );
}


export default React.memo(OccurrenceRegisterFinishComponent);
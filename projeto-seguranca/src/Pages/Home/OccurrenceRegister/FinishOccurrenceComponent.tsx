import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {Image, Stack, Icon} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import OccurrenceRegisterContainer from "./OccurrenceRegisterContainer";
import ButtonDefault from "../../../Components/ButtonDefault";
import HeadingDefault from "../../../Components/HeadingDefault";
import CreateOccurrenceService from "../../../Services/App/CreateOccurrenceService";
import { IOccurrenceRegisterContext, OccurrenceRegisterContext } from "./OccurrenceRegisterProvider";
import AlertDefault, { AlertDefaultProps } from "../../../Components/AlertDefault";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { loadUserFull } from "../../../Redux/Functions";


function FinishOccurrenceComponent(props: any){
    const navigation: NavigationProp<any> = useNavigation<any>();

    const dispatch: Dispatch = useDispatch();

    const {
        occurrence
    }: IOccurrenceRegisterContext = useContext<IOccurrenceRegisterContext>(OccurrenceRegisterContext);

    const [alertState, setAlertState] = useState<Omit<AlertDefaultProps, "stateOpen">>({
        text: "",
        open: false,
        status: "info"
    });

    async function registerOccurrence(): Promise<void>{
        try{
            if(!occurrence.vehicle)
                throw new Error("Nenhum veículo foi selecionado!");

            await new CreateOccurrenceService(occurrence).execute();

            setAlertState({
                text: "Ocorrência cadastrada com sucesso",
                open: true,
                status: "success"
            });

            await loadUserFull(dispatch);

            navigation.navigate("Main");

        }catch(error){
            setAlertState({
                text: "Falha ao cadastrar ocorrência",
                open: true,
                status: "error"
            });
        }
    }


    return (
        <OccurrenceRegisterContainer
            minHeight={500}
            haveScrool={true}
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
                <>
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
                    <AlertDefault
                        {...alertState}
                        stateOpen={(open) =>{
                            setAlertState({ ...alertState, open })
                        }}
                    />
                </>
                
            )}
        />
    );
}


export default React.memo(FinishOccurrenceComponent);
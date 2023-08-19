import React from "react";
import { Image, Stack } from "native-base";
import OccurrenceRegisterContainer from "./OccurrenceRegisterContainer";
import HeadingDefault from "../../../Components/HeadingDefault";


function OccurrenceVehicleComponent(props: any): React.ReactElement{
    return (
        <OccurrenceRegisterContainer>
            <Stack
                width="full"
                direction="column"
                justifyContent="center"
                alignItems="center"
                space={10}
            >
                <HeadingDefault fontSize={28} textAlign="left">
                    Agora selecione {" "}
                    <HeadingDefault color="primary" fontSize={28}>
                        o veículo {" "}
                    </HeadingDefault>
                    que acabou sofrendo o acidente
                </HeadingDefault>

                <Image 
                    source={require("../../../../assets/car.png")}
                    width={500}
                    height={300}
                    alt="map"
                />
            </Stack>
        </OccurrenceRegisterContainer>
    );
}


export default React.memo(OccurrenceVehicleComponent);
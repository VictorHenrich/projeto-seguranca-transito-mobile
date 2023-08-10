import React from "react";
import { Stack } from "native-base";
import ContainerDefault from "../../../../../Components/ContainerDefault";
import HeadingDefault from "../../../../../Components/HeadingDefault";

function ProtocolSegurityComponent3(props: any): React.ReactElement{

    return (
        <ContainerDefault backgroundColor="secondary">
            <Stack>
                <HeadingDefault>
                    Não se esqueça de acompanhar e asegurar-se que
                    a ocorrência foi criada com exito!
                </HeadingDefault>
            </Stack>
        </ContainerDefault>
    );
}

export default React.memo(ProtocolSegurityComponent3);
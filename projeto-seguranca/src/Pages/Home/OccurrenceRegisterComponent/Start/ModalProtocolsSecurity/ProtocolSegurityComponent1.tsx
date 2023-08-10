import React from "react";
import { Stack } from "native-base";
import ContainerDefault from "../../../../../Components/ContainerDefault";
import HeadingDefault from "../../../../../Components/HeadingDefault";

function ProtocolSegurityComponent1(props: any): React.ReactElement{

    return (
        <ContainerDefault backgroundColor="secondary">
            <Stack>
                <HeadingDefault>
                    Para começar, você necessita realizar a obtenção de vídeos
                    para você conseguir comprovar alguma coisa depois.
                </HeadingDefault>
            </Stack>
        </ContainerDefault>
    );
}


export default React.memo(ProtocolSegurityComponent1);
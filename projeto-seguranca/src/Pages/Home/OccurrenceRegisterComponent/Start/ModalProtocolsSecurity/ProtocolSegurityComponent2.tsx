import { Stack } from "native-base";
import ContainerDefault from "../../../../../Components/ContainerDefault";
import HeadingDefault from "../../../../../Components/HeadingDefault";

export default function ProtocolSegurityComponent2(props: any){

    return (
        <ContainerDefault backgroundColor="secondary">
            <Stack>
                <HeadingDefault>
                    Após de obter todas as evidencias possíveis,
                    você precisa retirar o carro da via o mais rápido possível
                    para a liberação da pista a os outros demais motoristas
                </HeadingDefault>
            </Stack>
        </ContainerDefault>
    );
}
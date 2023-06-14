import { Stack, Image } from "native-base";
import ButtonDefault from "../../../Components/ButtonDefault";
import ContainerDefault from "../../../Components/ContainerDefault";




export default function OccurrenceRegisterComponent(props: any){
    return (
        <ContainerDefault backgroundColor="secondary">
            <Stack
                width="full"
                alignItems="center"
            >   
                <Image 
                    source={require("../../../../assets/carro_batendo.png")}
                    alt="car"
                />
                <ButtonDefault 
                    text="Começar processo de registro de ocorrência"
                    shadow="5"
                />
            </Stack>
        </ContainerDefault>
    )
}
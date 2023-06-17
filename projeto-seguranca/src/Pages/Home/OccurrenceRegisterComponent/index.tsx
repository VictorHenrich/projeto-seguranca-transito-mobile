import { Stack, Image } from "native-base";
import ButtonDefault from "../../../Components/ButtonDefault";
import ContainerDefault from "../../../Components/ContainerDefault";
import BackgroundApp from "../../../Components/BackgroundApp";




export default function OccurrenceRegisterComponent(props: any){
    return (
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
                />
            </Stack>
        </ContainerDefault>
    )
}
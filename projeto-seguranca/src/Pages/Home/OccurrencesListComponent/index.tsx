import { FlatList } from "native-base";

import ContainerDefault from "../../../Components/ContainerDefault"
import OccurrenceItemComponent, {OccurrenceItemComponentProps} from "./OccurrenceItemComponent";






export default function OccurrenceListComponent(props: any){

    const data: OccurrenceItemComponentProps[] = [
        {
            address: {
                city: "Capivari de Baixo",
                street: "Rua antonio Manuel dos Santos",
                district: "Caçador",
                number: "393",
                state: "SC"
            },
            vehicle: {
                plate: "IHK-339-92",
                renavam: "222.1111-00",
                type: "MOTO"
            },
            created: "14/06/2023 00:00:00",
            status: "SUCESSO"
        },
        {
            address: {
                city: "Tubarão",
                street: "Rua não sei da onde",
                district: "Andrino",
                number: "S/N",
                state: "SC"
            },
            vehicle: {
                plate: "IHK-339-92",
                renavam: "222.1111-00",
                type: "CARRO"
            },
            created: "14/06/2023 00:00:00",
            status: "ERRO"
        },
        {
            address: {
                city: "Joenvilhe",
                street: "Rua Alguma coisa",
                district: "Centro",
                number: "s/n",
                state: "SC"
            },
            vehicle: {
                plate: "IHK-339-92",
                renavam: "222.1111-00",
                type: "CARRO"
            },
            created: "14/06/2023 00:00:00",
            status: "ANDAMENTO"
        },
        {
            address: {
                city: "Joenvilhe",
                street: "Rua Alguma coisa",
                district: "Centro",
                number: "s/n",
                state: "SC"
            },
            vehicle: {
                plate: "IHK-339-92",
                renavam: "222.1111-00",
                type: "CARRO"
            },
            created: "14/06/2023 00:00:00",
            status: "PROCESSANDO"
        }
    ]

    return (
        <ContainerDefault
            backgroundColor="secondary"
        >
            <FlatList
                width="full"
                padding={5}
                data={data}
                renderItem={(itemData) => {
                    return (
                        <OccurrenceItemComponent 
                            address={itemData.item.address}
                            created={itemData.item.created}
                            status={itemData.item.status}
                            vehicle={itemData.item.vehicle}
                            key={itemData.index}
                        />
                    );
                }}
            />
        </ContainerDefault>
    )
}
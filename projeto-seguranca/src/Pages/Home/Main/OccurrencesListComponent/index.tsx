import React, { useContext } from "react";
import { FlatList } from "native-base";

import ContainerDefault from "../../../../Components/ContainerDefault";
import OccurrenceItemComponent from "./OccurrenceItemComponent";
import { ContextHome, IContextMain } from "../MainProvider";



function OccurrenceListComponent(props: any): React.ReactElement{

    const {
        occurrences
    } = useContext<IContextMain>(ContextHome);

    return (
        <ContainerDefault
            backgroundColor="secondary"
        >
            <FlatList
                width="full"
                padding={5}
                data={occurrences}
                renderItem={(itemData) => {
                    return (
                        <OccurrenceItemComponent
                            description={itemData.item.description}
                            lat={itemData.item.lat}
                            lon={itemData.item.lon}
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


export default React.memo(OccurrenceListComponent);
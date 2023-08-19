import React, { useContext } from "react";

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
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
        >
            {
                occurrences.map((occurrence, index) => (
                    <OccurrenceItemComponent
                            description={occurrence.description}
                            lat={occurrence.lat}
                            lon={occurrence.lon}
                            address={occurrence.address}
                            created={occurrence.created}
                            status={occurrence.status}
                            vehicle={occurrence.vehicle}
                            key={index}
                        />
                ))
            }
        </ContainerDefault>
    )
}


export default React.memo(OccurrenceListComponent);
import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";

import ContainerDefault from "../../../../Components/ContainerDefault";
import OccurrenceItemComponent from "./OccurrenceItemComponent";
import { IGlobalState } from "../../../../Redux/GlobalSlice";
import { OccurrenceItemType } from "../../../../Services/App/GetOccurrencesService";



function OccurrenceListComponent(props: any): React.ReactElement{
    const globalOccurrences: OccurrenceItemType[] = useSelector<IGlobalState, OccurrenceItemType[]>(state => state.occurrences);

    const [occurrences, setOccurrences] = useState<OccurrenceItemType[]>(globalOccurrences);

    useCallback(()=>{
        setOccurrences(globalOccurrences);
    }, [globalOccurrences]);

    return (
        <ContainerDefault
            backgroundColor="secondary"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            haveScrool={true}
            minHeight={900}
        >
            {
                occurrences.map((occurrence, index) => (
                    <OccurrenceItemComponent
                            description={occurrence.description}
                            location={occurrence.location}
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
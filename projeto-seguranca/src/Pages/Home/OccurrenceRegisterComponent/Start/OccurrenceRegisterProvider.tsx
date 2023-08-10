import React, { createContext, Context, useState, PropsWithChildren } from "react";
import { CreateOccurrenceProps } from "../../../../Services/CreateOccurrencesService";



export interface IOccurrenceRegisterContext{
    occurrence: CreateOccurrenceProps,
    setOccurrence: (occurrence: CreateOccurrenceProps) => void
}


const initialValues: IOccurrenceRegisterContext = {
    occurrence: {
        lon: "",
        lat: "",
        vehicleUuid: "",
        attachments: [],
        description: ""
    },
    setOccurrence: (occurrence: CreateOccurrenceProps) => null,
}

const OccurrenceRegisterContext: Context<IOccurrenceRegisterContext> = createContext<IOccurrenceRegisterContext>(initialValues);

export default function OccurrenceRegisterProvider({ children }: PropsWithChildren): React.ReactElement{
    const [occurrence, setOccurrence] = useState<CreateOccurrenceProps>(initialValues.occurrence);

    return (
        <OccurrenceRegisterContext.Provider
            value={{
                occurrence,
                setOccurrence
            }}
        >
            {children}
        </OccurrenceRegisterContext.Provider>
    )
}

export { OccurrenceRegisterContext };
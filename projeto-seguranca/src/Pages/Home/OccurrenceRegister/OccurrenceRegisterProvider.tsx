import React, { createContext, Context, useState, PropsWithChildren } from "react";
import IVehiclePayload from "../../../Patterns/IVehiclePayload";
import IOccurrencePayload, { OccurrenceStatus } from "../../../Patterns/IOccurrencePayload";



export interface IOccurrenceRegisterPayload extends Omit<IOccurrencePayload, "vehicle">{
    vehicle?: IVehiclePayload
}


export interface IOccurrenceRegisterContext{
    occurrence: IOccurrenceRegisterPayload,
    setOccurrence: (occurrence: IOccurrenceRegisterPayload) => void
}


const initialValues: IOccurrenceRegisterContext = {
    occurrence: {
        location: undefined,
        address: undefined,
        vehicle: undefined,
        attachments: [],
        description: "",
        created: new Date(),
        status: OccurrenceStatus.PROGRESS
    },
    setOccurrence: (occurrence: IOccurrenceRegisterPayload) => null,
}

const OccurrenceRegisterContext: Context<IOccurrenceRegisterContext> = createContext<IOccurrenceRegisterContext>(initialValues);

function OccurrenceRegisterProvider({ children }: PropsWithChildren): React.ReactElement{
    const [occurrence, setOccurrence] = useState<IOccurrenceRegisterPayload>(initialValues.occurrence);

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

export default React.memo(OccurrenceRegisterProvider);

export { OccurrenceRegisterContext };
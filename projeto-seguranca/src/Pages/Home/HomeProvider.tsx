import { createContext, Context, useState } from "react";
import IUserPayload from "../../patterns/IUserPayload";
import IOccurrencePayload from "../../patterns/IOccurrencePayload";



type OccurrencesPayloadType = Omit<IOccurrencePayload, "user">[];


export interface IContextHome{
    user: IUserPayload;
    occurrences: OccurrencesPayloadType;
    setUser: (user: IUserPayload) => void;
    setOccurrences: (occurrences: OccurrencesPayloadType) => void;
}


const initialValues: IContextHome = {
    user: {
        name: "Victor Henrich",
        email: "victorhenrich993@gmail.com",
        birthday: new Date(),
        document: "02988790000",
        documentRg: "111111111",
        password: "1234",
        stateIssue: "SC",
        telephone: "48999187582",
        vehicles: [],
        address: {
            city: "CAPIVARI DE BAIXO",
            district: "CAÇADOR",
            number: "1",
            state: "SC",
            street: "RUA ANTONIO MANUEL DOS SANTOS"
        }
    },
    occurrences: [],
    setOccurrences: (occurrences: OccurrencesPayloadType)=> null,
    setUser: (user: IUserPayload)=> null
}


const ContextHome: Context<IContextHome> = createContext(initialValues);

export default function HomeProvider(props: any){
    const [userPayload, setUserPayload] = useState<IUserPayload>(initialValues.user);
    const [occurrencesPayload, setOccurrencesPayload] = useState<OccurrencesPayloadType>(initialValues.occurrences);

    return (
        <ContextHome.Provider 
            value={{
                user: userPayload,
                occurrences: occurrencesPayload,
                setOccurrences: setOccurrencesPayload,
                setUser: setUserPayload
            }}
        >
            {props.children}
        </ContextHome.Provider>
    );
}
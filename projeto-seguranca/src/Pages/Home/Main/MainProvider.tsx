import { createContext, Context, useState, useCallback } from "react";
import IUserPayload from "../../../Patterns/IUserPayload";
import GetOccurrencesService, { OccurrenceItemType } from "../../../Services/App/GetOccurrencesService";
import GetUserService, { UserGetPayload } from "../../../Services/App/GetUserService";
import IVehiclePayload from "../../../Patterns/IVehiclePayload";
import GetVehiclesService from "../../../Services/App/GetVehiclesService";



export interface IContextMain{
    user: IUserPayload;
    occurrences: OccurrenceItemType[];
    setUser: (user: IUserPayload) => void;
    setOccurrences: (occurrences: OccurrenceItemType[]) => void;
    loadUser: () => Promise<void>
    loadOccurrences: () => Promise<void>
}


const initialValues: IContextMain = {
    user: {
        name: "",
        email: "",
        birthday: new Date(),
        documentCpf: "",
        documentRg: "",
        issuerState: "",
        telephone: "",
        vehicles: [],
        address: {
            city: "",
            district: "",
            number: "",
            state: "",
            street: "",
            zipcode: ""
        }
    },
    occurrences: [],
    setOccurrences: (occurrences: OccurrenceItemType[])=> undefined,
    setUser: (user: IUserPayload)=> undefined,
    loadOccurrences: async () => undefined,
    loadUser: async() => undefined
}


const ContextHome: Context<IContextMain> = createContext(initialValues);

export default function MainProvider(props: any){
    const [userPayload, setUserPayload] = useState<IUserPayload>(initialValues.user);

    const [occurrencesPayload, setOccurrencesPayload] = useState<OccurrenceItemType[]>(initialValues.occurrences);


    async function loadOccurrencesPayload(): Promise<void>{
        const occurrences: OccurrenceItemType[] = await new GetOccurrencesService().execute();

        setOccurrencesPayload([...occurrences]);
    }

    async function loadUserPayload(): Promise<void>{
        const [ user, vehicles]: [UserGetPayload, IVehiclePayload[]] = await Promise.all([
            new GetUserService().execute(),
            new GetVehiclesService().execute()
        ])

        setUserPayload({
            ...user,
            vehicles
        });
    }

    async function loadFull(): Promise<void>{
        await Promise.all([
            loadOccurrencesPayload(),
            loadUserPayload()
        ]);
    }

    useCallback(() => {
        
        loadFull();
    }, []);

    return (
        <ContextHome.Provider 
            value={{
                user: userPayload,
                occurrences: occurrencesPayload,
                setOccurrences: setOccurrencesPayload,
                setUser: setUserPayload,
                loadOccurrences: loadOccurrencesPayload,
                loadUser: loadUserPayload
            }}
        >
            {props.children}
        </ContextHome.Provider>
    );
}

export {ContextHome};
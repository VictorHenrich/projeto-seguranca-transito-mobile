import { createContext, Context, useState, useEffect } from "react";
import IUserPayload from "../../patterns/IUserPayload";
import GetOccurrencesService, { OccurrenceItemType } from "../../Services/GetOccurrencesService";
import GetUserService, { UserGetPayload } from "../../Services/GetUserService";
import IUserVehiclePayload from "../../patterns/IUserVehiclePayload";
import GetVehiclesService from "../../Services/GetVehiclesService";



export interface IContextHome{
    user: IUserPayload;
    occurrences: OccurrenceItemType[];
    setUser: (user: IUserPayload) => void;
    setOccurrences: (occurrences: OccurrenceItemType[]) => void;
    loadUser: () => Promise<void>
    loadOccurrences: () => Promise<void>
}


const initialValues: IContextHome = {
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
            street: ""
        }
    },
    occurrences: [],
    setOccurrences: (occurrences: OccurrenceItemType[])=> undefined,
    setUser: (user: IUserPayload)=> undefined,
    loadOccurrences: async () => undefined,
    loadUser: async() => undefined
}


const ContextHome: Context<IContextHome> = createContext(initialValues);

export default function HomeProvider(props: any){
    const [userPayload, setUserPayload] = useState<IUserPayload>(initialValues.user);

    const [occurrencesPayload, setOccurrencesPayload] = useState<OccurrenceItemType[]>(initialValues.occurrences);


    async function loadOccurrencesPayload(): Promise<void>{
        const occurrences: OccurrenceItemType[] = await new GetOccurrencesService().execute();

        setOccurrencesPayload(occurrences);
    }

    async function loadUserPayload(): Promise<void>{
        const [ user, vehicles]: [UserGetPayload, IUserVehiclePayload[]] = await Promise.all([
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

    useEffect(() => {
        
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
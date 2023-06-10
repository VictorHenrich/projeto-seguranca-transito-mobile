import { createContext, useState, Context } from "react";
import { UserCreatePayload } from "../../Services/UserCreateService";


export interface IContextRegister{
    userPayload: UserCreatePayload,
    setUserPayload: (user: UserCreatePayload) => void
    pageIndex: number,
    setPageIndex: (index: number) => void
}

const initValues: IContextRegister = {
    userPayload: {
        name: "",
        email: "",
        document: "",
        documentRg: "",
        telephone: "",
        password: "",
        stateIssue: "SANTA CATARINA",
        birthday: new Date(),
        vehicles: [{
            plate: "",
            renavam: "",
            vehicleType: "CARRO"
        }],
        address: {
            city: "",
            district: "",
            number: "",
            state: "",
            street: ""
        }
    },
    setUserPayload: () => null,
    pageIndex: 1,
    setPageIndex: () => null
}

const ContextRegister: Context<IContextRegister> = createContext<IContextRegister>(initValues);


export default function RegisterProvider({ children }: any){
    const [userPayload, setUserPayload] = useState<UserCreatePayload>(initValues.userPayload);
    const [pageIndex, setPageIndex] = useState<number>(initValues.pageIndex);

    return (
        <ContextRegister.Provider value={{
            userPayload,
            setUserPayload,
            pageIndex,
            setPageIndex
        }}>
            {children}
        </ContextRegister.Provider>
    )
}


export { ContextRegister };
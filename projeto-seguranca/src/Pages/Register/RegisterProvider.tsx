import { createContext, useState, Context, PropsWithChildren } from "react";
import { CreateUserProps } from "../../Services/CreateUserService";


export interface IContextRegister{
    userPayload: CreateUserProps,
    setUserPayload: (user: CreateUserProps) => void
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


export default function RegisterProvider({ children }: PropsWithChildren): React.ReactElement{
    const [userPayload, setUserPayload] = useState<CreateUserProps>(initValues.userPayload);
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
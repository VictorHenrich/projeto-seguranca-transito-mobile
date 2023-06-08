import { createContext, useState, Context, } from "react";


export interface IUserPayload{
    name: string,
    document: string,
    documentRg: string,
    stateIssue: string
}

export interface IContextRegister{
    userPayload: IUserPayload,
    setUserPayload: (user: IUserPayload) => void
    pageIndex: number,
    setPageIndex: (index: number) => void
}

const initValues: IUserPayload = {
    name: "",
    document: "",
    documentRg: "",
    stateIssue: "SANTA CATARINA"
}

const initialPage: number = 1


const ContextRegister: Context<IContextRegister> = createContext<IContextRegister>({
    userPayload: initValues,
    setUserPayload: () => null,
    pageIndex: 1,
    setPageIndex: () => null
});


export default function RegisterProvider({ children }: any){
    const [userPayload, setUserPayload] = useState<IUserPayload>(initValues);
    const [pageIndex, setPageIndex] = useState<number>(initialPage);

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
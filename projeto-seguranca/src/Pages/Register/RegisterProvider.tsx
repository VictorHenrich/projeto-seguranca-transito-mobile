import { createContext, useState, Context, PropsWithChildren } from "react";
import { CreateUserServiceProps } from "../../Services/App/CreateUserService";
import { VehicleTypes } from "../../Patterns/IVehiclePayload";


export interface IContextRegister{
    userPayload: CreateUserServiceProps,
    setUserPayload: (user: CreateUserServiceProps) => void
    pageIndex: number,
    setPageIndex: (index: number) => void
}

const initValues: IContextRegister = {
    userPayload: {
        name: "",
        email: "",
        documentCpf: "",
        documentRg: "",
        telephone: "",
        password: "",
        issuerState: "SANTA CATARINA",
        birthday: new Date(),
        vehicles: [{
            uuid: "",
            plate: "",
            renavam: "",
            vehicleType: VehicleTypes.CAR
        }],
        address: {
            city: "",
            district: "",
            number: "",
            state: "SC",
            street: "",
            zipcode: ""
        }
    },
    setUserPayload: () => null,
    pageIndex: 1,
    setPageIndex: () => null
}

const ContextRegister: Context<IContextRegister> = createContext<IContextRegister>(initValues);


export default function RegisterProvider({ children }: PropsWithChildren): React.ReactElement{
    const [userPayload, setUserPayload] = useState<CreateUserServiceProps>(initValues.userPayload);
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
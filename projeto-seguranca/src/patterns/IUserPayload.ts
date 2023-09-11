import IAddressPayload from "./IAddressPayload";
import IVehiclePayload from "./IVehiclePayload";



export default interface IUserPayload{
    email: string;
    name: string;
    documentCpf: string;
    documentRg: string;
    issuerState: string;
    telephone: string;
    birthday: Date;
    address: IAddressPayload;
    vehicles: IVehiclePayload[]
}
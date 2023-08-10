import IUserAddressPayload from "./IUserAddressPayload";
import IUserVehiclePayload from "./IUserVehiclePayload";



export default interface IUserPayload{
    email: string;
    name: string;
    documentCpf: string;
    documentRg: string;
    issuerState: string;
    telephone: string;
    birthday: Date;
    address: IUserAddressPayload;
    vehicles: IUserVehiclePayload[]
}
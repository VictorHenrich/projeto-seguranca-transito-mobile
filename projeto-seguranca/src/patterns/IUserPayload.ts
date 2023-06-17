import IUserAddressPayload from "./IUserAddressPayload";
import IUserVehiclePayload from "./IUserVehiclePayload";



export default interface IUserPayload{
    email: string;
    password: string;
    name: string;
    document: string;
    documentRg: string;
    stateIssue: string;
    telephone: string;
    birthday: Date;
    address: IUserAddressPayload;
    vehicles: IUserVehiclePayload[]
}
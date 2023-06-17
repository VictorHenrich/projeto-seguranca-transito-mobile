import AbstractService from "../patterns/AbstractService";


export interface GetUserServiceProps{
    uuid: string;
    email: string;
    name: string;
    document: string;
    documentRg: string;
    birthday: Date;
    telephone: string;
    addressState: string;
    addressCity: string;
    addressDistrict: string;
    addressStreet: string;
    addressNumber: string;
}



export default class GetUserService extends AbstractService<void, GetUserServiceProps>{
    execute(): Promise<GetUserServiceProps> {
        throw new Error("Method not implemented.");
    }

}
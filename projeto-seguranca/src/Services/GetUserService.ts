import { AxiosInstance, AxiosResponse } from "axios";
import AbstractService from "../patterns/AbstractService";
import IUserPayload from "../patterns/IUserPayload";
import ApiFactory from "./Factories/ApiFactory";


export type UserGetPayload = Omit<IUserPayload, "vehicles">;


export default class GetUserService extends AbstractService<void, UserGetPayload>{
    static readonly URL: string = "/user/query";

    handleUserData(userData: any): UserGetPayload{
        return {
            name: userData.name,
            email: userData.email,
            birthday: userData.birthday,
            documentCpf: userData.document_cpf,
            documentRg: userData.document_rg,
            issuerState: userData.issuerState,
            telephone: userData.telephone,
            address: {
                state: userData.address_state,
                city: userData.address_city,
                district: userData.address_district,
                street: userData.address_street,
                number: userData.address_number
            }
        }
    }

    async execute(): Promise<UserGetPayload> {
        const api: AxiosInstance = await ApiFactory.create();

        const { data: { result: userData }}: AxiosResponse = await api.get(GetUserService.URL);

        return this.handleUserData(userData);
    }

}
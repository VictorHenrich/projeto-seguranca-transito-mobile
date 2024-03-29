import { AxiosInstance, AxiosResponse } from "axios";
import AbstractService from "../../Patterns/AbstractService";
import IUserPayload from "../../Patterns/IUserPayload";
import ApiFactory from "../Factories/ApiFactory";


export type UserGetPayload = Omit<IUserPayload, "vehicles">;


export default class GetUserService extends AbstractService<void, UserGetPayload>{
    private readonly URL: string = "/user/query";

    handleUserData(userData: any): UserGetPayload{
        return {
            name: userData.name,
            email: userData.email,
            birthday: userData.birthday,
            documentCpf: userData.document_cpf,
            documentRg: userData.document_rg,
            issuerState: userData.issuer_state,
            telephone: userData.telephone,
            address: {
                state: userData.address_state,
                city: userData.address_city,
                district: userData.address_district,
                street: userData.address_street,
                number: userData.address_number,
                zipcode: userData.address_zipcode
            }
        }
    }

    async execute(): Promise<UserGetPayload> {
        const apiFactory: ApiFactory = new ApiFactory();

        const api: AxiosInstance = await apiFactory.create();

        const { data: { result: userData }}: AxiosResponse = await api.get(this.URL);

        return this.handleUserData(userData);
    }

}
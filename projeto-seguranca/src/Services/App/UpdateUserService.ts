import { AxiosInstance } from "axios";
import AbstractService from "../../Patterns/AbstractService";
import IUserPayload from "../../Patterns/IUserPayload";
import ApiFactory from "../Factories/ApiFactory";



export default class UpdateUserService extends AbstractService<Omit<IUserPayload, "vehicles">, void>{
    private readonly urlUpdateUser: string = "/user/register";

    private handleRequestData(): any{
        return {
            name: this.payload.name,
            email: this.payload.email,
            document_cpf: this.payload.documentCpf,
            document_rg: this.payload.documentRg,
            issuer_state: this.payload.issuerState,
            telephone: this.payload.telephone,
            birthday: this.payload.birthday,
            address_state: this.payload.address.state,
            address_city: this.payload.address.city,
            address_district: this.payload.address.district,
            address_street: this.payload.address.street,
            address_number: this.payload.address.number,
            address_zipcode: this.payload.address.zipcode,
        }
    }
    
    async execute(): Promise<void> {
        try{
            const api: AxiosInstance = await new ApiFactory().create();

            const data: any = this.handleRequestData();

            await api.put(this.urlUpdateUser, data);

        }catch(error: any){
            throw new Error(`Falha ao atualizar usuário: ${error.toString()}`);
        }
    }

}
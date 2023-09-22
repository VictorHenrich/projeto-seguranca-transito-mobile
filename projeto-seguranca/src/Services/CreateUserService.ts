import { AxiosInstance, AxiosResponse } from "axios";

import ApiFactory from "./Factories/ApiFactory";
import AbstractService from "../Patterns/AbstractService";
import UserCreateError from "../Exceptions/UserCreateError";
import IUserPayload from "../Patterns/IUserPayload";



export interface CreateUserServiceProps extends IUserPayload{
    password: string
}


export default class CreateUserService extends AbstractService<CreateUserServiceProps>{
    private readonly urlUserCreation: string = "/user/register";

    private getData(): any {
        return {
            name: this.payload.name,
            email: this.payload.email,
            password: this.payload.password,
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
            vehicles: this.payload.vehicles.map(vehicle => {

                return {
                    plate: vehicle.plate,
                    renavam: vehicle.renavam,
                    vehicle_type: vehicle.vehicleType.toString(),
                    brand: vehicle.brand,
                    model: vehicle.model,
                    chassi: vehicle.chassi,
                    color: vehicle.color,
                    have_safe: vehicle.haveSafe,
                    year: vehicle.year
                }
            })
        }
    }

    async execute(): Promise<void>{
        try{
            const apiFactory: ApiFactory = new ApiFactory();

            const api: AxiosInstance = await apiFactory.create();

            const data: any = this.getData()

            const { data: { data: token } }: AxiosResponse = await api.post(
                this.urlUserCreation,
                data
            );

            api.defaults.headers["Authorization"] = token;

        }catch(error){
            const { response: { data : responseData } }: any = error;
            
            throw new UserCreateError(responseData.data);
        }
    }
}
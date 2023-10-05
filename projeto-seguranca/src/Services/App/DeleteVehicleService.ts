import { AxiosInstance } from "axios";
import AbstractService from "../../Patterns/AbstractService";
import IVehiclePayload from "../../Patterns/IVehiclePayload";
import ApiFactory from "../Factories/ApiFactory";



export default class UpdateVehicleService extends AbstractService<Pick<IVehiclePayload, "uuid">, void>{
    private readonly urlDeleteVehicle: string = "/user/vehicle/register"

    async execute(): Promise<void> {
        try{
            const url: string = `${this.urlDeleteVehicle}/${this.payload.uuid}`;

            const api: AxiosInstance = await new ApiFactory().create();

            await api.delete(url);

        }catch(error: any){
            throw new Error(`Falha ao excluir veículo: ${error.toString()}`);
        }
    }
    
}
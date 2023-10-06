import { AxiosInstance } from "axios";
import AbstractService from "../../Patterns/AbstractService";
import IVehiclePayload from "../../Patterns/IVehiclePayload";
import ApiFactory from "../Factories/ApiFactory";



export default class UpdateVehicleService extends AbstractService<IVehiclePayload, void>{
    private readonly urlUpdateVehicle: string = "/user/vehicle/register"

    private handleRequestData(): any{
        return {
            plate: this.payload.plate,
            renavam: this.payload.renavam,
            vehicle_type: this.payload.vehicleType,
            chassi: this.payload.chassi,
            brand: this.payload.brand,
            model: this.payload.model,
            year: this.payload.year,
            color: this.payload.color,
            have_safe: this.payload.haveSafe
        }
    }

    async execute(): Promise<void> {
        try{
            const url: string = `${this.urlUpdateVehicle}/${this.payload.uuid}`;

            const data: any = this.handleRequestData();

            const api: AxiosInstance = await new ApiFactory().create();

            await api.put(url, data);

        }catch(error: any){
            throw new Error(`Falha ao atualizar veículo: ${error.toString()}`);
        }
    }

}
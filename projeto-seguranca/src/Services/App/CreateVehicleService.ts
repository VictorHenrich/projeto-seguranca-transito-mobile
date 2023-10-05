import { AxiosInstance } from "axios";
import AbstractService from "../../Patterns/AbstractService";
import IVehiclePayload from "../../Patterns/IVehiclePayload";
import ApiFactory from "../Factories/ApiFactory";



export default class CreateVehicleService extends AbstractService<Omit<IVehiclePayload, "uuid">, void>{
    private readonly urlCreateVehicle: string = "/user/vehicle/register"

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
            const data: any = this.handleRequestData();

            const api: AxiosInstance = await new ApiFactory().create();

            await api.post(this.urlCreateVehicle, data);

        }catch(error: any){
            throw new Error(`Falha ao cadastrar veículo: ${error.toString()}`);
        }
    }

}
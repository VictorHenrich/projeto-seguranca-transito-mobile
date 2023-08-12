import AbstractService from "../patterns/AbstractService";
import IUserVehiclePayload, { VehicleTypes } from "../patterns/IUserVehiclePayload";
import ApiFactory from "./Factories/ApiFactory";


export default class GetVehiclesService extends AbstractService<void, IUserVehiclePayload[]>{
    static readonly URL: string = "/user/vehicle/query";

    handleVehicles(vehicles: any[]): IUserVehiclePayload[]{
        return vehicles.map(({  
            plate,
            renavam,
            brand,
            chassi,
            color,
            model,
            year,
            vehicle_type: type,
            have_safe: haveSafe
        }) => {
            
            const vehicleType: VehicleTypes = type === "MOTO"
                ? VehicleTypes.MOTORCYCLE
                : VehicleTypes.CAR

            return {
                plate,
                renavam,
                brand,
                chassi,
                color,
                model,
                year,
                vehicleType,
                haveSafe
            }
        })
    }

    async execute(): Promise<IUserVehiclePayload[]> {
        const api = await ApiFactory.create();

        const { data: { result: vehicles } } = await api.get(GetVehiclesService.URL);

        return this.handleVehicles(vehicles);
    }
}
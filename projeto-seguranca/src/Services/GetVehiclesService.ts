import AbstractService from "../Patterns/AbstractService";
import IVehiclePayload, { VehicleTypes } from "../Patterns/IVehiclePayload";
import ApiFactory from "./Factories/ApiFactory";


export default class GetVehiclesService extends AbstractService<void, IVehiclePayload[]>{
    private readonly URL: string = "/user/vehicle/query";

    handleVehicles(vehicles: any[]): IVehiclePayload[]{
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

    async execute(): Promise<IVehiclePayload[]> {
        const apiFactory: ApiFactory = new ApiFactory();

        const api = await apiFactory.create();

        const { data: { result: vehicles } } = await api.get(this.URL);

        return this.handleVehicles(vehicles);
    }
}
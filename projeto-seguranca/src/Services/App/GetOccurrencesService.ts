import { AxiosInstance, AxiosResponse } from "axios";
import AbstractService from "../../Patterns/AbstractService";
import ApiFactory from "../Factories/ApiFactory";
import GetOccurrencesError from "../../Exceptions/GetOccurrencesError";
import IOccurrencePayload from "../../Patterns/IOccurrencePayload";


export type OccurrenceItemType = Omit<IOccurrencePayload, "attachments">


export default class GetOccurrencesService extends AbstractService<void, OccurrenceItemType[]>{
    private readonly URL: string = "/user/occurrence/query";

    getData(occurrencesPayload: any[]): OccurrenceItemType[]{
        return occurrencesPayload.map(item => {
            return {
                address: {
                    state: item.address.state,
                    city: item.address.city,
                    district: item.address.district,
                    street: item.address.street
                },
                description: item.description,
                location: {
                    lat: item.lat,
                    lon: item.lon,
                },
                status: item.status,
                created: item.created,
                vehicle: {
                    uuid: item.vehicle.uuid,
                    plate: item.vehicle.plate,
                    renavam: item.vehicle.renavam,
                    vehicleType: item.vehicle.type
                }
            }
        });
    }

    async execute(): Promise<OccurrenceItemType[]> {
        const apiFactory: ApiFactory = new ApiFactory();

        const api: AxiosInstance = await apiFactory.create();
        
        try{
            const { data: { result: occurrences }}: AxiosResponse = await api.get(this.URL);

            return this.getData(occurrences);

        }catch(error){
            throw new GetOccurrencesError();
        }
    }
}
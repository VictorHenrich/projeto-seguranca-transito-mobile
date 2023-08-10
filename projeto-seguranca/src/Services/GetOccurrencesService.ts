import { AxiosResponse } from "axios";
import AbstractService from "../patterns/AbstractService";
import ApiFactory from "./Server/ApiFactory";
import GetOccurrencesError from "../Exceptions/GetOccurrencesError";
import IOccurrencePayload from "../patterns/IOccurrencePayload";


export type OccurrenceItemType = Omit<IOccurrencePayload, "attachments" | "user">


export default class GetOccurrencesService extends AbstractService<void, OccurrenceItemType[]>{
    private static readonly URL: string = "/user/occurrence/query";

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
                lat: item.lat,
                lon: item.lon,
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
        const api = await ApiFactory.create();
        
        try{
            const { data: { result: occurrences }}: AxiosResponse = await api.get(GetOccurrencesService.URL);

            return this.getData(occurrences);

        }catch(error){
            throw new GetOccurrencesError();
        }
    }
}
import { AxiosResponse } from "axios";
import AbstractService from "./AbstractService";
import api from "./Server/InstanceApi";
import GetOccurrencesError from "../Exceptions/GetOccurrencesError";


export interface GetOccurrencesProps{
    description: string,
    addressState: string,
    addressCity: string,
    addressDistrict: string,
    addressStreet: string,
    addressNumber: string | number,
    lat: string,
    lon: string,
    created: Date,
    vehicle: {
        uuid: string,
        plate: string,
        renavam: string,
        vehicleType: string
    }
}


export default class GetOccurrencesService extends AbstractService<void, GetOccurrencesProps[]>{
    private static readonly urlGetOccurrences: string = "/ocorrencia/registro";

    getData(occurrencesPayload: any[]): GetOccurrencesProps[]{
        return occurrencesPayload.map(item => {
            return {
                description: item.description,
                addressState: item.address_state,
                addressCity: item.address_city,
                addressDistrict: item.address_district,
                addressStreet: item.address_street,
                addressNumber: item.address_number,
                lat: item.lat,
                lon: item.lon,
                created: new Date(item.created),
                vehicle: {
                    uuid: item.vehicle.uuid,
                    plate: item.vehicle.plate,
                    renavam: item.vehicle.renavam,
                    vehicleType: item.vehicle.type
                }
            }
        });
    }

    async execute(): Promise<GetOccurrencesProps[]> {
        try{
            const response: AxiosResponse = await api.get(GetOccurrencesService.urlGetOccurrences);

            const {data: occurrences } = response;

            return this.getData(occurrences.data);

        }catch(error){
            throw new GetOccurrencesError();
        }
    }
}
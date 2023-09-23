import AsyncStorage from '@react-native-async-storage/async-storage';
import { UNSET_OCCURRENCE_KEY } from "@env";

import AbstractService from "../../Patterns/AbstractService"
import ApiFactory from "../Factories/ApiFactory"
import { AxiosInstance } from "axios"
import VerifyNetworkService from "../Expo/VerifyNetworkService"
import IOccurrencePayload, { OccurrenceStatus } from '../../Patterns/IOccurrencePayload';
import GetUnsetOccurrenceService from './GetUnsetOccurrencesService';


export default class CreateOccurrenceService extends AbstractService<IOccurrencePayload>{
    private readonly occurrenceCreateURL: string = "/user/occurrence/register";

    getOccurrenceData(): any{
        const data: any = {
            vehicle_uuid: this.payload.vehicle.uuid,
            description: this.payload.description,
            attachments: this.payload.attachments,
            created: new Date()
        }

        if(this.payload.address)
            data.address = {
                zipcode: this.payload.address.zipcode,
                state: this.payload.address.state,
                city: this.payload.address.city,
                district: this.payload.address.district,
                street: this.payload.address.street,
                number: this.payload.address.number
            };

        if(this.payload.location)
            data.location = {
                lat: this.payload.location.lat,
                lon: this.payload.location.lon
            };

        return data;
    }

    private async saveInLocal(): Promise<void>{
        const unsetOccurrences: IOccurrencePayload[] = 
            await new GetUnsetOccurrenceService().execute();

        const newUnsetOccurrences: IOccurrencePayload[] = [
            ...unsetOccurrences,
            {
                ...this.payload,
                status: OccurrenceStatus.UNSET
            }
        ]

        await AsyncStorage
            .setItem(UNSET_OCCURRENCE_KEY, JSON.stringify(newUnsetOccurrences));
    }

    private async saveInServer(): Promise<void>{
        const data: any = this.getOccurrenceData();

        const apiFactory: ApiFactory = new ApiFactory();

        const api: AxiosInstance = await apiFactory.create();

        await api.post(this.occurrenceCreateURL, data);
    }

    async execute(): Promise<void> {
        const verifyNetwork: boolean = await new VerifyNetworkService().execute();

        if(verifyNetwork)
            await this.saveInServer();

        else
            await this.saveInLocal();
    }

}
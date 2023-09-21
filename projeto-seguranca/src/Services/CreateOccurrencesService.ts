import AbstractService from "../Patterns/AbstractService"
import IAttachmentPayload from "../Patterns/IAttachmentPayload"
import IAddressPayload from "../Patterns/IAddressPayload"
import ILocationPayload from "../Patterns/ILocationPayload"
import ApiFactory from "./Factories/ApiFactory"
import { AxiosInstance } from "axios"

export interface CreateOccurrenceProps{
    vehicleUuid: string,
    address?: IAddressPayload,
    location?: ILocationPayload,
    description: string,
    attachments: IAttachmentPayload[]
}



export default class CreateOccurrencesService extends AbstractService<CreateOccurrenceProps>{
    private readonly occurrenceCreateURL: string = "/user/occurrence/register";

    getOccurrenceData(): any{
        const data: any = {
            veiculo_uuid: this.payload.vehicleUuid,
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

    async execute(): Promise<void> {
        const apiFactory: ApiFactory = new ApiFactory();

        const api: AxiosInstance = await apiFactory.create();

        const data: any = this.getOccurrenceData();

        await api.post(this.occurrenceCreateURL, data);
    }

}
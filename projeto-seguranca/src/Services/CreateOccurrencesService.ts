import AbstractService from "../patterns/AbstractService"



export interface AttachmentsProps{
    content: string,
    type: string
}


export interface CreateOccurrenceProps{
    vehicleUuid: string,
    lat: string,
    lon: string,
    description: string,
    attachments: AttachmentsProps[]
}



export default class CreateOccurrencesService extends AbstractService<CreateOccurrenceProps>{
    async execute(): Promise<void> {
        const data: any = {
            veiculo_uuid: this.payload.vehicleUuid,
            latitude: this.payload.lat,
            longitude: this.payload.lon
        }
    }

}
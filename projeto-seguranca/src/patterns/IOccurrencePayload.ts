import IUserPayload from "./IUserPayload";
import IVehiclePayload from "./IVehiclePayload";


export enum OccurrenceStatus{
    SUCCESS = "SUCESSO",
    ERROR = "ERRO",
    PROGRESS = "ANDAMENTO",
    PROCESSING = "PROCESSAMENTO"
}


export default interface IOccurrencePayload{
    user: Omit<IUserPayload, "vehicles">;
    vehicle: IVehiclePayload;
    address: {
        state: string;
        city: string;
        district: string;
        street: string;
    };
    created: Date;
    lat: string;
    lon: string;
    description: string;
    attachments: [{
        content: string;
        type: string
    }];
    status: OccurrenceStatus
}
import IUserPayload from "./IUserPayload";
import IUserVehiclePayload from "./IUserVehiclePayload";


export enum OccurrenceStatus{
    SUCCESS = "SUCESSO",
    ERROR = "ERRO",
    PROGRESS = "ANDAMENTO",
    PROCESSING = "PROCESSAMENTO"
}


export default interface IOccurrencePayload{
    user: Omit<IUserPayload, "vehicles">;
    vehicle: IUserVehiclePayload;
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
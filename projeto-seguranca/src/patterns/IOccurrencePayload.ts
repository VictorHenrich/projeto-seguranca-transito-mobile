import IAddressPayload from "./IAddressPayload";
import IAttachmentPayload from "./IAttachmentPayload";
import ILocationPayload from "./ILocationPayload";
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
    address?: IAddressPayload;
    location?: ILocationPayload,
    created: Date;
    lat: string;
    lon: string;
    description: string;
    attachments: IAttachmentPayload[];
    status: OccurrenceStatus
}
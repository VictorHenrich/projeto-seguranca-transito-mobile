import IAddressPayload from "./IAddressPayload";
import IAttachmentPayload from "./IAttachmentPayload";
import ILocationPayload from "./ILocationPayload";
import IUserPayload from "./IUserPayload";
import IVehiclePayload from "./IVehiclePayload";


export enum OccurrenceStatus{
    SUCCESS = "SUCESSO",
    ERROR = "ERRO",
    PROGRESS = "ANDAMENTO",
    PROCESSING = "PROCESSAMENTO",
    UNSET = "NAO_ENVIADO"
}


export default interface IOccurrencePayload{
    vehicle: IVehiclePayload;
    address?: IAddressPayload;
    location?: ILocationPayload,
    created: Date;
    description: string;
    attachments: IAttachmentPayload[];
    status: OccurrenceStatus
}
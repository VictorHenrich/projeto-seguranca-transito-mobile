import IUserPayload from "./IUserPayload";
import IUserVehiclePayload from "./IUserVehiclePayload";



export default interface IOccurrencePayload{
    user: Omit<IUserPayload, "vehicles">;
    vehicle: IUserVehiclePayload;
    address: {
        state: string;
        city: string;
        district: string;
        street: string;
    };
    lat: string;
    lon: string;
    description: string;
    attachments: [{
        content: string;
        type: string
    }];
    status: "SUCESSO" | "ERRO" | "ANDAMENTO" | "PROCESSAMENTO"
}
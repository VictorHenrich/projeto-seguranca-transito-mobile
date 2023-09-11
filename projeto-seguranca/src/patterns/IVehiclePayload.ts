

export enum VehicleTypes{
    CAR = "CARRO",
    MOTORCYCLE = "MOTO"
}


export default interface IVehiclePayload{
    plate: string,
    renavam: string,
    vehicleType: VehicleTypes,
    brand?: string,
    chassi?: string,
    color?: string,
    model ?: string,
    year?: number | string,
    haveSafe?: boolean
}
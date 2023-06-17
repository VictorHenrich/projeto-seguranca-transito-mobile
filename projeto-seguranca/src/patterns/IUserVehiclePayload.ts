


export default interface IUserVehiclePayload{
    plate: string,
    renavam: string,
    vehicleType: "CARRO" | "MOTO",
    brand?: string,
    chassi?: string,
    color?: string,
    model ?: string,
    year?: number | string,
    haveSafe?: boolean
}
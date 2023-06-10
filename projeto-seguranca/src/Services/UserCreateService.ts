import api from "./Api";
import AbstractService from "./AbstractService";

type VehicleType = "CARRO" | "MOTO"


export interface UserAddressPayload{
    state: string,
    city: string,
    district: string,
    street: string,
    number: string | number
}


export interface UserVehiclePayload{
    plate: string,
    renavam: string,
    vehicleType: VehicleType,
    brand?: string,
    chassi?: string,
    color?: string,
    model ?: string,
    year?: number | string,
    haveSafe?: boolean
}


export interface UserCreatePayload{
    email: string,
    password: string,
    name: string,
    document: string,
    documentRg: string,
    stateIssue: string,
    telephone: string,
    birthday: Date,
    address: UserAddressPayload,
    vehicles: UserVehiclePayload[]
}



export default class UserCreateService extends AbstractService<UserCreatePayload>{
    private static urlUserCreation: string = "/usuario/autenticacao";

    private getData(): any {
        return {
            nome: this.payload.name,
            email: this.payload.email,
            senha: this.payload.password,
            cpf: this.payload.document,
            rg: this.payload.documentRg,
            estado_emissor: this.payload.stateIssue,
            telefone: this.payload.telephone,
            data_nascimento: this.payload.birthday.toString(),
            endereco_uf: this.payload.address.state,
            endereco_cidade: this.payload.address.city,
            endereco_bairro: this.payload.address.district,
            endereco_logradouro: this.payload.address.street,
            endereco_numero: this.payload.address.number,
            veiculos: this.payload.vehicles.map(vehicle => {

                return {
                    placa: vehicle.plate,
                    renavam: vehicle.renavam,
                    tipo_veiculo: vehicle.vehicleType,
                    marca: vehicle.brand,
                    modelo: vehicle.model,
                    chassi: vehicle.chassi,
                    cor: vehicle.color,
                    possui_seguro: vehicle.haveSafe,
                    ano: vehicle.year
                }
            })
        }
    }

    async execute(): Promise<void>{
        const data: any = this.getData()

        await api.post(
            UserCreateService.urlUserCreation,
            data
        );
    }
}
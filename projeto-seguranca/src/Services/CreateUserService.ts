import ApiFactory from "./Server/ApiFactory";
import AbstractService from "../patterns/AbstractService";
import UserCreateError from "../Exceptions/UserCreateError";

type VehicleType = "CARRO" | "MOTO"


export interface UserAddressProps{
    state: string,
    city: string,
    district: string,
    street: string,
    number: string | number
}


export interface UserVehicleProps{
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


export interface CreateUserProps{
    email: string,
    password: string,
    name: string,
    document: string,
    documentRg: string,
    stateIssue: string,
    telephone: string,
    birthday: Date,
    address: UserAddressProps,
    vehicles: UserVehicleProps[]
}



export default class CreateUserService extends AbstractService<CreateUserProps>{
    private static readonly urlUserCreation: string = "/usuario/registro";

    private getData(): any {
        return {
            nome: this.payload.name,
            email: this.payload.email,
            senha: this.payload.password,
            cpf: this.payload.document,
            rg: this.payload.documentRg,
            estado_emissor: this.payload.stateIssue,
            telefone: this.payload.telephone,
            data_nascimento: this.payload.birthday,
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
        try{
            const api = await ApiFactory.create();

            const data: any = this.getData()

            const { data: { data: token } } = await api.post(
                CreateUserService.urlUserCreation,
                data
            );

            api.defaults.headers["Authorization"] = token;

        }catch(error){
            const { response: { data : responseData } } = error;
            
            throw new UserCreateError(responseData.data);
        }
    }
}
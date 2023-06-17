import api from "./Server/InstanceApi";
import AbstractService from "../patterns/AbstractService";
import AuthenticationError from "../Exceptions/AuthenticationError";



export interface AuthorizationProps{
    email: string,
    password: string
}




export default class AuthorizationService extends AbstractService<AuthorizationProps>{
    private static urlAuthentication: string = "/usuario/autenticacao";

    async execute(): Promise<void>{
        const data: any = {
            email: this.payload.email,
            senha: this.payload.password
        }

        try{
            const response = await api.post(
                AuthorizationService.urlAuthentication,
                data
            );

            const { data: token }: any = response.data;

            api.defaults.headers["Authorization"] = token;

        }catch(error){
            throw new AuthenticationError();
        }
    }
    
}
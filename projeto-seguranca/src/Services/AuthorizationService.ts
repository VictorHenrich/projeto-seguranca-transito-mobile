import api from "./Api";
import AbstractService from "./AbstractService";
import AuthenticationError from "../Exceptions/AuthenticationError";



export interface AuthorizationPayload{
    email: string,
    password: string
}




export default class AuthorizationService extends AbstractService<AuthorizationPayload>{
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
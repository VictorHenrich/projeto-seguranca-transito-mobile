import { AxiosResponse } from "axios";

import api from "./Api";
import IService from "./IService";
import AuthenticationError from "../Exceptions/AuthenticationError";





export default class AuthorizationService implements IService{
    private static urlAuthentication: string = "/usuario/autenticacao";

    constructor(
        private readonly email: string,
        private readonly password: string
    ){

    }

    async execute(): Promise<void>{
        const data: any = {
            email: this.email,
            senha: this.password
        }

        const response: AxiosResponse = await api.post(
            AuthorizationService.urlAuthentication,
            data
        );

        if(response.status >= 400)
            throw new AuthenticationError();

        const { data: token }: any = response.data;

        api.defaults.headers["Authorization"] = token

    }
    
}
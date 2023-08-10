import ApiFactory from "./Server/ApiFactory";
import AbstractService from "../patterns/AbstractService";
import AuthenticationError from "../Exceptions/AuthenticationError";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_KEY } from "@env";



export interface AuthorizationProps{
    email: string,
    password: string
}



export default class AuthorizationService extends AbstractService<AuthorizationProps>{
    private static urlAuthentication: string = "/user/authentication";

    async execute(): Promise<void>{
        const api = await ApiFactory.create();

        try{
            const { data: { result: token }} = await api.post(
                AuthorizationService.urlAuthentication,
                this.payload
            );

            await AsyncStorage.setItem(
                AUTH_KEY,
                token
            );

            api.defaults.headers["Authorization"] = token;

        }catch(error){
            throw new AuthenticationError();
        }
    }
    
}
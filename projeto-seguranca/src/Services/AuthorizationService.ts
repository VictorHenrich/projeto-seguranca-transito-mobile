import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_KEY, API_BASE_URL } from "@env";
import { AxiosInstance, AxiosResponse } from 'axios';

import ApiFactory from "./Factories/ApiFactory";
import AbstractService from "../Patterns/AbstractService";
import AuthenticationError from "../Exceptions/AuthenticationError";




export interface AuthorizationProps{
    email: string,
    password: string
}



export default class AuthorizationService extends AbstractService<AuthorizationProps>{
    private urlAuthentication: string = "/user/authentication";

    async execute(): Promise<void>{
        const apiFactory = new ApiFactory();

        const api: AxiosInstance = await apiFactory.create();

        const data = {
            email: this.payload.email.trim(),
            password: this.payload.password.trim()
        };

        try{
            const { data: { result: token }}: AxiosResponse = await api.post(
                this.urlAuthentication,
                data
            );

            await AsyncStorage.setItem(
                AUTH_KEY,
                token
            );

        }catch(error){
            throw new AuthenticationError();
        }
    }
    
}
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_KEY } from "@env";
import { AxiosInstance, AxiosResponse } from 'axios';

import ApiFactory from "./Factories/ApiFactory";
import AbstractService from "../Patterns/AbstractService";
import AuthenticationError from "../Exceptions/AuthenticationError";




export interface AuthorizationProps{
    email: string,
    password: string
}



export default class AuthorizationService extends AbstractService<AuthorizationProps>{
    private static urlAuthentication: string = "/user/authentication";

    async execute(): Promise<void>{
        const api: AxiosInstance = await ApiFactory.create();

        try{
            const { data: { result: token }}: AxiosResponse = await api.post(
                AuthorizationService.urlAuthentication,
                this.payload
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
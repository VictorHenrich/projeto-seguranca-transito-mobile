import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_KEY } from "@env";

import AbstractService from "../Patterns/AbstractService";
import { AxiosInstance, AxiosResponse } from 'axios';
import ApiFactory from './Factories/ApiFactory';
import TokenExpiredError from '../Exceptions/TokenExpiredError';




export default class AuthRefreshService extends AbstractService<void, void>{
    private static readonly urlRefreshToken: string = "/user/authentication/refresh";
    
    async execute(): Promise<void> {
        try{
            const api: AxiosInstance = await ApiFactory.create();

            const token: string | null = await AsyncStorage.getItem(AUTH_KEY);

            const data: any = { token };

            const { data: { result }}: AxiosResponse = await api.post(AuthRefreshService.urlRefreshToken, data);

            await AsyncStorage.setItem(AUTH_KEY, result);
            
        }catch(error){
            throw new TokenExpiredError();
        }
    }

}
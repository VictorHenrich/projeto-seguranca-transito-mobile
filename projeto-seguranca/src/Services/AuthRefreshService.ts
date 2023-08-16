import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_KEY } from "@env";

import AbstractService from "../Patterns/AbstractService";
import { AxiosInstance, AxiosResponse } from 'axios';
import ApiFactory from './Factories/ApiFactory';




export default class AuthRefreshService extends AbstractService<void, boolean>{
    private static readonly urlRefreshToken: string = "/user/authentication/refresh";
    
    async execute(): Promise<boolean> {
        try{
            const apiFactory: ApiFactory = new ApiFactory();

            const api: AxiosInstance = await apiFactory.create();

            const token: string | null = await AsyncStorage.getItem(AUTH_KEY);

            const data: any = { token };

            const { data: { result }}: AxiosResponse = await api.post(AuthRefreshService.urlRefreshToken, data);

            await AsyncStorage.setItem(AUTH_KEY, result);

            return true;
            
        }catch(error){
            await AsyncStorage.setItem(AUTH_KEY, "");

            return false;
        }
    }

}
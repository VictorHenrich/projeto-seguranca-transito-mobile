import Axios, { AxiosInstance } from "axios";
import { API_BASE_URL, AUTH_KEY } from "@env";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default class ApiFactory{
    async create(): Promise<AxiosInstance>{
        const authToken: string | void = await AsyncStorage.getItem(AUTH_KEY) || undefined;

        const headers: any = {
            "Content-Type": "application/json",
            "Authorization": authToken
        }

        return Axios.create({
            baseURL: API_BASE_URL,
            headers: headers
        });
    }
}
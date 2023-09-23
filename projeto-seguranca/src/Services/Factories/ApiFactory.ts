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
            baseURL: "https://2fb4-2804-7c0-10b0-e775-7c41-9a31-5d02-d90c.ngrok-free.app",
            headers: headers
        });
    }
}
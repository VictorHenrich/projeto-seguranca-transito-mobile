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
            baseURL: "https://0870-2804-7c0-10b0-e036-2d24-9628-3105-b058.ngrok-free.app",
            headers: headers
        });
    }
}
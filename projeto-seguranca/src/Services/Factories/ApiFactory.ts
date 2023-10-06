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
            baseURL: "https://d2db-2804-7c0-10b0-5790-85d3-cf52-eaeb-e1ed.ngrok-free.app",
            headers: headers
        });
    }
}
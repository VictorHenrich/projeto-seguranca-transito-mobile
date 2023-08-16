import { io, Socket } from "socket.io-client";
import { WS_BASE_URL, AUTH_KEY } from "@env";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class SocketFactory{
    async create(): Promise<Socket>{
        const authToken: string | void = await AsyncStorage.getItem(AUTH_KEY) || undefined;

        return io(
            WS_BASE_URL, 
            {
                extraHeaders: {
                    "Authorization": `${authToken}`
                }
            }
        )
    }
}
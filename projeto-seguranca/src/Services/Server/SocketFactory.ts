import { io } from "socket.io-client";
import api from "./InstanceApi";


export default class SocketFactory{
    private static baseURL: string = "ws://localhost:3000";

    public static create(): any{

        return io(
            SocketFactory.baseURL, 
            {
                extraHeaders: {
                    "Authorization": `${api.defaults.headers["Authorization"]}`
                }
            }
        )
    }
}
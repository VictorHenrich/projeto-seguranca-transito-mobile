import Axios, { AxiosInstance } from "axios";




const api: AxiosInstance = Axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;
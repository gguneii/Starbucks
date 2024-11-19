import axios from "axios";
import configObj from "../config/config";

const axiosInstance = axios.create({
    baseURL: configObj.baseUrl,
    headers: {
        "Content-Type": "application/json",
    }
})

export default axiosInstance  
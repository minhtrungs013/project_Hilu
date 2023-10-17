import { API_BASE } from "../config";
import axios from "axios";

export function loginAPI(endpoint, body) {
    return axios.post(`${API_BASE}/${endpoint}`, body);
}

export function registerAPI(endpoint, body) {
    return axios.post(`${API_BASE}/${endpoint}`, body);
}
import { API_BASE } from "../config";
import API from "../instance";

export function getPractices(endpoint) {
    return API.get(`${API_BASE}/${endpoint}`);
}
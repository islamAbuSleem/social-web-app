import service from "../axios-config/index";
import authEndpoints from './endpoints';


export function login(userData) {
    service.post(`${authEndpoints.LOGIN_ENDPOINT}`, userData).then(res => res).catch(e => e)
}
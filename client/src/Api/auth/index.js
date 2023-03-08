import service from "../axios-config/index";
import authEndpoints from './endpoints';


export function login(userData) {
   return service.post(`${authEndpoints.LOGIN_ENDPOINT}`, userData).then(res => res).catch(e => e)
}

export function register(userData) {
   return service.post(`${authEndpoints.REGISTER_ENDPOINT}`, userData).then(res => res).catch(e => e)
}
import axios from "axios";
import apiUrl from "../apiUrl";
import {getLang} from "../i18next/translate";
export const instance = axios.create({
    baseURL: apiUrl + ((getLang()=='ru')?'/ru':'') + '/api/'
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

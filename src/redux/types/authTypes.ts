import {AuthPayload} from "./payloadDto/authPayload";

export type AuthAction = {
    payload: AuthPayload,
    type: string,
}

export enum AuthActionTypes {
    LOGIN='LOGIN',
    REGISTRATION='REGISTRATION',
    LOGOUT='LOGOUT'
}
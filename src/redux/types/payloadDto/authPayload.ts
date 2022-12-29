import {Customer} from "./customer";

export type AuthPayload={
    customer: Customer,
    token: string
}
/*
* customer
* {
* id
* firstname,
* lastname
* email,
* password,
*
* [roles]
* }
* token
*
* */
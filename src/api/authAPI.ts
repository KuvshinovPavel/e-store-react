import {instance} from "./index";

export const authAPI = {
    login: (email: string, password: string) => instance.post('/auth/login', {
        email, password
    }),
    register: (firstname: string, lastname: string, email: string, password: string) =>
        instance.post('/auth/registration', {
            firstname, lastname, email, password
        }),
}
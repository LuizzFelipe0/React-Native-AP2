import { apiAuth } from "./http";

const Login = (loginData)=>{
    return apiAuth.post(`login`,loginData)
}

const Registration = (cadastroData)=>{
    return apiAuth.post(`usuarios`,cadastroData)
}

const FindUserByEmail = (email:string)=>{
    return apiAuth.get(`usuarios?email=${email}`)
}

export default {
    Login, Registration,FindUserByEmail
}
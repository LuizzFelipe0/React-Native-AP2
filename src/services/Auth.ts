import { apiAuth } from "./http";

const Login = (loginData)=>{
    return apiAuth.post(`login`,loginData)
}

const Registration = (cadastroData)=>{
    return apiAuth.post(`usuarios`,cadastroData)
}


export default {
    Login, Registration
}
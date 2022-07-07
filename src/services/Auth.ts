import { apiAuth } from "./http";

const Login = (loginData)=>{
    return apiAuth.post(`login`,loginData)
}

const Registration = ()=>{
    return apiAuth.post(`profile`)
}


export default {
    Login, Registration
}
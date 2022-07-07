import { apiAuth } from "./http";

const Registration = (user)=>{

    return apiAuth.post(`usuarios`,user)
}

const Login = (user)=>{

    return apiAuth.post(`login`,user)
}

const FindUserByEmail = (email:string)=>{
    return apiAuth.get(`usuarios?email=${email}`)
}

export default {
    Registration,Login,FindUserByEmail
}
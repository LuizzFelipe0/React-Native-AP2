import { apiAuth } from "./http";

const Registration = (user)=>{
    console.log(user)
    return apiAuth.post(`usuarios`,user)
}

const Login = (user)=>{
    console.log(user)
    return apiAuth.post(`login`,user)
}

export default {
    Registration,Login
}
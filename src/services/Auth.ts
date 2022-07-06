import { apiAuth } from "./http";

const Login = (email:string,password:string)=>{
    return apiAuth.post(`login`,{email:{email}, senha:{password}})
}

const Registration = (nome:string,email:string,password:string)=>{
    return apiAuth.post(`usuarios`,{nome:{nome},email:{email}, senha:{password},administrador: "false"})
}

const GetUser = ()=>{
    return apiAuth.get(`usuarios`)
}

export default {
    Login, Registration,GetUser
}
import { user } from "../screens/Registration";
import { apiAuth } from "./http";

const Login = (loginData)=>{
    return apiAuth.post(`login`,loginData)
}

const Registration = (cadastroData)=>{
    return apiAuth.post(`usuario`,cadastroData)
}


export default {
    Login, Registration
}
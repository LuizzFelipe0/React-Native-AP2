import { apiAuth } from "./http";

const Registration = (user)=>{
    return apiAuth.post(`usuarios`,user)
}

export default {
    Registration
}
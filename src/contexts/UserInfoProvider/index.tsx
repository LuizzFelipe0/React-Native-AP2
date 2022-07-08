import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userLogin } from "../../screens/Login";

export interface UserInfoType {
   user?:userLogin[]
   setUser:(user:userLogin[])=>void;
}
export const UserInfoContext = createContext<UserInfoType>({
    user:[{
        email:"",
        password:"",
    }],
    setUser:(user:userLogin[])=>{}
})
export const UserInfoProvider=({children})=>{
    const [user, setUser] = useState<userLogin[]>([]);

    useEffect(()=>{
        console.log(user);
    },[user])

    return (
        <UserInfoContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </UserInfoContext.Provider>
    )
}
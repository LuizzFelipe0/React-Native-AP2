import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { user } from "../../screens/Registration";

export interface UserInfoType {
   user?:user[]
   setUser:(user:user[])=>void;
}
export const UserInfoContext = createContext<UserInfoType>({
    user:[{
        email:"",
        password:"",
        username:""
    }],
    setUser:(user:user[])=>{}
})
export const UserInfoProvider=({children})=>{
    const [user, setUser] = useState<user[]>([]);

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
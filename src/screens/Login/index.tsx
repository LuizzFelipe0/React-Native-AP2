import React, { useState, } from "react";
import { View, Text, TouchableOpacity, TextInput, } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5 from 'md5';
import apiService from '../../services/requests'
import { styles } from "./styles";
import Auth from "../../services/Auth";
//import { user } from "../Registration";

export interface user{
    nome:string,
    email:string,
    password:string,
}
export const Login = () => {
    const [connectData, setConnectData] = useState<user>();
    const publicKey = "77e494c4516148e6430389b7f72228fc";
    const privateKey = "8368e5953e101d85c5ba546899972007fc3032fb";

    async function handleSignIn() {
    
        Auth.Login(connectData).then(()=>{
            const publicKey = "77e494c4516148e6430389b7f72228fc";
            const privateKey = "8368e5953e101d85c5ba546899972007fc3032fb";
            console.log("deu certo")
            }).catch(error => console.log(error.response.data));
            try {
                await AsyncStorage.setItem("@publicKey", publicKey);
                await AsyncStorage.setItem("@privateKey", privateKey);
            } catch (error) {
                console.error("error ao salvar no AsyncStorage", error);
            }
        }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem-vindo(a)
            </Text>
            <TextInput
                                onChangeText={(text) => setConnectData({...connectData, email:text})}
                                style={styles.input}
                                placeholder="Email"
                            />
            <TextInput
                                onChangeText={(text) => setConnectData({...connectData, password:text})}
                                style={styles.input}
                                placeholder="Password"
                            />
            <TouchableOpacity style={[styles.button, { marginBottom: 30 }, { marginTop: 30 }]} onPress={handleSignIn}>
                <Text style={styles.buttonText}>
                    Continuar
                </Text>
            </TouchableOpacity>

        </View>

    )
}
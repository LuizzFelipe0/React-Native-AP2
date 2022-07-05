import React, { useState, } from "react";
import { View, Text, TouchableOpacity, TextInput, } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5 from 'md5';
import apiService from '../../services/requests'

import { styles } from "./styles";


export interface User{
    id: Number,
    email:string,
    password:string,
    username:string,
}

export const Registration = () => {
    const [email, SetEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");

    async function handleRegistration() {
        if (email === "pedro@gmail.com" && password === "123456") {
            const publicKey = "77e494c4516148e6430389b7f72228fc";
            const privateKey = "8368e5953e101d85c5ba546899972007fc3032fb";

            try {
                await AsyncStorage.setItem("@publicKey", publicKey);
                await AsyncStorage.setItem("@privateKey", privateKey)

            } catch (error) {
                console.error("error ao salvar no AsyncStorage", error);

            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem-vindo(a)
            </Text>
            <TextInput style={styles.input} placeholder={"Username"} onChangeText={e => setUsername} />
            <TextInput style={styles.input} placeholder={"Email"} onChangeText={e => SetEmail} />
            <TextInput style={styles.input} placeholder={"Password"} onChangeText={e => setPassword} />
            <TouchableOpacity style={[styles.button, { marginBottom: 30 }, { marginTop: 30 }]} onPress={handleRegistration}>
                <Text style={styles.buttonText}>
                    Cadastrar-se
                </Text>
            </TouchableOpacity>

        </View>

    )
}
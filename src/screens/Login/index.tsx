import React, { useState, } from "react";
import { View, Text, TouchableOpacity, TextInput, } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5 from 'md5';
import apiService from '../../services/requests'

import { styles } from "./styles";

export const Login = () => {
    const [email, SetEmail] = useState<string>("pedro@gmail.com");
    const [password, setPassword] = useState<string>("123456");

    const [characters, setCharacters] = useState<any>([])

    async function handleSignIn() {
        if (email === "pedro@gmail.com" && password === "123456") {
            const publicKey = "77e494c4516148e6430389b7f72228fc";
            const privateKey = "8368e5953e101d85c5ba546899972007fc3032fb";

            try {
                await AsyncStorage.setItem("@publicKey", publicKey);
                await AsyncStorage.setItem("@privateKey", privateKey)
                console.log("SALVOU E LOGOU");

            } catch (error) {
                console.error("error ao salvar no AsyncStorage", error);

            }
        }
    }

    async function handleGetCharacters() {
        try {
            const publicKey = await AsyncStorage.getItem("@publicKey");
            const privateKey = await AsyncStorage.getItem("@privateKey");
            const time = Number(new Date());
            const hash = md5(time + privateKey + publicKey)

            const response = await apiService.getCharacters(time, publicKey, hash);

            if (response) {
                setCharacters(response)
            }

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem-vindo(a)
            </Text>
            <TextInput style={styles.input} placeholder={"Email"} placeholderTextColor={'#808080'} onChangeText={e => SetEmail} />
            <TextInput style={styles.input} placeholder={"Password"} placeholderTextColor={'#808080'} onChangeText={e => setPassword} />
            <TouchableOpacity style={[styles.button, { marginBottom: 30 }, { marginTop: 30 }]} onPress={handleSignIn}>
                <Text style={styles.buttonText}>
                    Continuar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { marginBottom: 30 }, { marginTop: 30 }]} onPress={handleGetCharacters}>
                <Text style={styles.buttonText}>
                    clica dps
                </Text>
            </TouchableOpacity>
        </View>

    )
}
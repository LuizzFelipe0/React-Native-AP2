import React, { useState, } from "react";
import { View, Text, TouchableOpacity, TextInput, } from "react-native";

import { styles } from "./styles";
import Auth from "../../services/Auth";


export interface user{
    id: Number,
    email:string,
    password:string,
    username:string,
}

export const Registration = () => {
    const [email, SetEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [administrador, setadministrador] = useState<string>("false");
     function handleRegistration(username:string,email:string,password:string) {
            try {
               Auth.Registration()
                console.log(Auth.GetUser)
            } catch (error) {
                console.error("error", error)

            }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem-vindoa(a)
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
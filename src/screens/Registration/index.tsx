import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, } from "react-native";

import { styles } from "./styles";
import Auth from "../../services/Auth";


export interface user{
    username:string,
    email:string,
    password:string,
}

export const Registration = () => {
    const [connectData, setConnectData] = useState<user>();
    const [error, setError] = useState<string>();

    function handleRegistration() {
        Auth.Registration(connectData).then().catch(error => console.log("oiiiiiiiiiii"));
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem-vindoa(a)
            </Text>
            <TextInput
                    onChangeText={(text) => setConnectData({...connectData, username:text})}
                        style={styles.input}
                        placeholder="Username"
                            />
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

            <TouchableOpacity style={[styles.button, { marginBottom: 30 }, { marginTop: 30 }]} onPress={handleRegistration}>
                <Text style={styles.buttonText}>
                    Cadastrar-se
                </Text>
            </TouchableOpacity>
        </View>
    )
}
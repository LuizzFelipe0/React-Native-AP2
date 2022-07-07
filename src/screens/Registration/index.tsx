import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, } from "react-native";
import { styles } from "./styles";
import Auth from "../../services/Auth";


export interface user{
    nome:string,
    email:string,
    password:string,
    administrador:string
}

export const Registration = () => {
    const [connectData, setConnectData] = useState<user>();
    const [error, setError] = useState<string>();

    function handleSubmit() {
        connectData.administrador="false"
        Auth.Registration(connectData).then().catch(error => console.log(error));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem-vindoa(a)
            </Text>
            <TextInput
                                onChangeText={(text) => setConnectData({...connectData, nome:text})}
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
            <TouchableOpacity style={[styles.button, { marginBottom: 30 }, { marginTop: 30 }]} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                    Cadastrar-se
                </Text>
            </TouchableOpacity>
        </View>
    )
}
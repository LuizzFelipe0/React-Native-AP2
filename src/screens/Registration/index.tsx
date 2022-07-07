import React, {useState } from "react";
import { View, Text, TouchableOpacity, TextInput} from "react-native";
import { styles } from "./styles";
import Auth from "../../services/Auth";


export interface user{
    nome:string,
    email:string,
    password:string,
    administrador:string
}

export const Registration = ({navigation}) => {
    const [connectData, setConnectData] = useState<user>();

    function handleSubmit() {
        connectData.administrador="false"
        Auth.Registration(connectData).then(()=>console.log("deu certo"),navigation.navigate("Login")).catch(error => console.log(error.response.data));
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
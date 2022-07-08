import React, {useState, useEffect} from "react";
import {View, Text, Image} from "react-native";
import { styles } from "./styles";
import LogoMarvel from "../../assets/images/Marvel_Logo.png";
import UniversoMarvel from "../../assets/images/Universo_Marvel.png";
import Auth from "../../services/Auth";
    useEffect (() => {   
        Auth.FindUserByEmail(email).then((res) => {
            setNome(res.data.usuarios[0].nome);
            console.log(res.data.usuarios[0].nome)   
        const currentHour = new Date().getHours();
        if (currentHour < 12){
            setGreetings('Bom dia '+res.data.usuarios[0].nome)
        }else if (currentHour >= 12 && currentHour < 18){
            setGreetings ('Boa tarde '+res.data.usuarios[0].nome)
        } else {
            setGreetings('Boa noite '+res.data.usuarios[0].nome)
        }})
    }, []);
    
    return <View style={styles.container}>
        <Text style= {styles.title}>
            {greetings} !
        </Text>

        <Text style={styles.bemVindos}> 
            Bem vindos ao Universo
        </Text>
        <Image source={LogoMarvel} style={styles.image}/>
        <Text style={styles.descricao}>
            Neste aplicativo você pode acessar os personagens e seus comics.
        </Text>
        <Image source={UniversoMarvel} style={styles.imageUniverso}/>

    </View>
    

}
import React, {useState, useEffect} from "react";
import {View, Text, Image} from "react-native";
import { styles } from "./styles";
import LogoMarvel from "../../assets/images/Marvel_Logo.png";
import UniversoMarvel from "../../assets/images/Universo_Marvel.png";

export const Marvel = () => {

    const [greetings, setGreetings] = useState<string>('');
    useEffect (() => { 
        const currentHour = new Date().getHours();
        if (currentHour < 12){
            setGreetings('Bom dia')
        }else if (currentHour >= 12 && currentHour < 18){
            setGreetings ('Boa tarde')
        } else {
            setGreetings('Boa noite')
        }
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
            Neste aplicativo você pode acessar os personagens, sua imagem e uma breve descrição dos mesmos.
        </Text>
        <Image source={UniversoMarvel} style={styles.imageUniverso}/>

    </View>
    

}
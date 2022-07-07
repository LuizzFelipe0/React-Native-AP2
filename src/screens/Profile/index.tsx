import React, { useState, useEffect, useContext } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Button, TextInput } from "react-native"
import { styles } from "./styles"
import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types'
import Botao from './button';
import { UserInfoContext } from '../../contexts/UserInfoProvider';
import Auth from "../../services/Auth";

export declare type ImagePickerResult = {
    cancelled: true;
} | ({
    cancelled: false;
} & ImageInfo);

export declare type ImageInfo = {
    uri: string;
    width: number;
    height: number;
    type?: 'image' | 'video';
    exif?: {
        [key: string]: any;
    };
    base64?: string;
};
export const Profile = () => {
    const [image, setImage] = useState(null);
    const email = useContext(UserInfoContext).user[0].email
    const [nome,setNome] = useState<string>();
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    useEffect (() => {   
        Auth.FindUserByEmail(email).then((res) => {
        setNome(res.data.usuarios[0].nome);
         console.log(res.data.usuarios[0].nome)   
        })
        }, []);

    return (<View style={styles.container}>
        <View >
            <Text style={styles.header}>Meu Perfil</Text>
        </View>
        <View style={styles.block}>
            {image && <Image source={{ uri: image }} style={styles.avatar}  />}
            <Text style={styles.text}>Nome: {nome}</Text>
            <Text style={styles.text1}>Email:{email}</Text>
            {/* <TextInput style={styles.input} placeholder={"Descrição"} placeholderTextColor={'#808080'}  /> */}

        </View>
        <Botao onPress={pickImage} />

    </View>
    );
}

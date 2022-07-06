import React, { useState, useEffect } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Button } from "react-native"
import { styles } from "./styles"
import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types'


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
  
    return (<View style={styles.container}>
           <View style={styles.header}>
                <Image style={styles.image} source={{ uri: "https://see.fontimg.com/api/renderfont4/Dj83/eyJyIjoiZnMiLCJoIjo3NCwidyI6MTAwMCwiZnMiOjc0LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0YyMTAxMCIsInQiOjF9/TWV1IFBlcmZpbA/marvel-regular.png" }} />
            </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Selecionar Imagem da Galeria" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.avatar} />}
      </View>
      </View>
    );
  }

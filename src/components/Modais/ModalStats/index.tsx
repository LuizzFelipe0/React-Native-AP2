import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ModalProps,Modal, View, Text, TouchableOpacity, ScrollView, Image, Button } from "react-native";
import { character, charactersList } from "../../../screens/MarvelList";
import { styles } from "./styles";
import md5 from 'md5';
import apiService from '../../../services/requests'

import CloseIcon from "../../../assets/icons/close_FILL0_wght400_GRAD0_opsz48.png";

interface ModalStatsProps extends ModalProps{
        ModalVisibility:boolean,
        setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>,
        CharacterId:Number,
}

export const ModalStats=({ModalVisibility,setModalVisibility,CharacterId}:ModalStatsProps)=>{

    const [reload, setReload] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [character,SetCharacter] = useState<character>({
        id: 0,
        name:"",
        description:"",
        modified:new Date,
        thumbnail: {
            path:"",
            extension:""
        }
    })





    async function auth() {
        
        const publicKey = await AsyncStorage.getItem("@publicKey");
        const privateKey = await AsyncStorage.getItem("@privateKey");
        const time = Number(new Date());
        const hash = md5(time + privateKey + publicKey)
        return ({publicKey,privateKey,time,hash})
    }

    useEffect(() => {
        setLoading(true);
             auth().then(async(res)=>{
                await apiService.getCharacterById(res.time, res.publicKey, res.hash,CharacterId).then((res) => {
                    SetCharacter(res.data);
                    console.log(res.data.results)
                    console.log(character.thumbnail.path)
                }).catch(() => {
                    console.log("Erro")
                }).finally(() =>
                 setLoading(false));
             })
    }, [reload,CharacterId]);
    

    return<Modal animationType="slide"
     transparent={true}
     onRequestClose={()=>{
        setModalVisibility(false)
     }}
     visible={ModalVisibility} >

        <View style={styles.modal}>
            <View style={styles.modalContainer}>
            {loading ? <Text style={styles.text}>
                    Carregando
                </Text>
                    :
                    <>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>
                                Nome:{character.name}
                            </Text>
                            <TouchableOpacity onPress={() => setModalVisibility(false)} style={{ alignContent: "flex-end", width: "10%" }}>
                                <Image
                                    source={CloseIcon}
                                    style={styles.closeIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <ScrollView indicatorStyle="white" style={{ padding: 5 }}>
                            <View>
                                <View>
                                    <Text style={styles.textTitle}>
                                        Descrição:
                                    </Text>
                                    <Text style={styles.text}>
                                        {character.description}
                                    </Text>
                                </View>
                            </View>
                        </ScrollView>
                    </>
                }
            </View>
        </View>
    </Modal>
}
import React, { useState, useEffect} from 'react';
import {View,Text,FlatList,Modal, Image, RefreshControl,} from 'react-native';
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5 from 'md5';
import apiService from '../../services/requests'
import { ComicCard } from '../../components/ComicCard';
import {ModalStats} from '../../components/Modais/ModalStats';
import { ScrollView } from 'react-native-gesture-handler';
export interface Images{
    path:string,
    extension:string
}
export interface ComicPrice{
    price:Number,
}
export interface ComicDate{
    date:Date,
}
export interface comic{
    id: Number,
    title:string,
    description:string,
    prices:[
        {price}
    ],
    thumbnail:{
        "path":string,
        "extension":string
    }
}

export interface comicList{
    id:Number,
    title:string,
    prices:[
        ComicPrice,
    ],
    thumbnail:{
        "path":string,
        "extension":string
    },
    pageCount:Number,
    format:string,
    dates:[
        ComicDate
    ]
}
    
export function ComicList({navigation}){

    const [comicsList, setComicsList] = useState<comicList[]>([]);
    const [comicId, setComicId] = useState<Number>()
    const [loading, setLoading] = useState<boolean>(true);
    const [reload, setReload] = useState<boolean>(false);
    
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
                await apiService.getComicsByIdOfHero(res.time, res.publicKey, res.hash,1009664).then((res) => {
                    setComicsList(res.data.data.results);
                }).catch(() => {
                    console.log("Erro")
                }).finally(() => setLoading(false));            
             })
    }, [reload]);
        return( 
        <View style={styles.container}>
            <Text style={styles.title}>Comics</Text>
             {loading ? 
                <Text style={styles.title}>...Loading...</Text>
                : 
                <FlatList
                    stickyHeaderHiddenOnScroll={true}
                    data={comicsList}
                    refreshControl={
                        <RefreshControl
                        refreshing={loading}
                        onRefresh={() => setReload(!reload)}
                        />
                    }
                    
                    renderItem={({ item }) => {
                        
                        return <ComicCard
                            setComicId={setComicId}
                            item={item}
                        />
                    }}
                    
                />
            }
        </View>
    )
}
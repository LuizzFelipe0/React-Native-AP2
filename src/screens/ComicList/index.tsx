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
    }
}
    
export function ComicList({navigation}){

    const [comicsList, setComicsList] = useState<comicList[]>([]);
    const [comicId, setComicId] = useState<Number>()
    const [loading, setLoading] = useState<boolean>(true);
    const [reload, setReload] = useState<boolean>(false);
    //const [modalVisibility,setModalVisibility]=useState<boolean>(true);

    //apagar depois
     AsyncStorage.setItem("@publicKey", "77e494c4516148e6430389b7f72228fc");
     AsyncStorage.setItem("@privateKey", "8368e5953e101d85c5ba546899972007fc3032fb")
    //
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
            <Text style={styles.title}>Herois</Text>
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
                            //setModalVisibility={setModalVisibility}
                            setComicId={setComicId}
                            item={item}
                        />
                    }}
                    
                />
            }
            {/* {comicId && <ModalStats
                ComicId={comicId}
               ModalVisibility={modalVisibility}
                setModalVisibility={setModalVisibility}
            />
            } */}
        </View>
    )
}
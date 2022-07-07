import React from 'react';
import { TouchableOpacity,TouchableOpacityProps, Text, Image,View } from 'react-native';
import { styles } from './styles';
import {comicList} from './../../screens/ComicList'

interface ComicCardProps extends TouchableOpacityProps {
    item: comicList,
    //setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>
    setComicId: React.Dispatch<React.SetStateAction<Number>>,
}

export function ComicCard({ item,setComicId, ...rest } : ComicCardProps ) {

    function HandleOpenModal () {
        //setModalVisibility(true);
        setComicId(item.id);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {item.title}
            </Text>
            <View style={{flexDirection:'row'}}>
        <Image source={{
            uri:item.thumbnail.path+"/portrait_fantastic."+item.thumbnail.extension
            }} style={[styles.image,{marginTop:15}]}
            />
        <Text style={[styles.text,{color:'#000'},{marginTop:15}]}>
              Price: ${(item.prices[0].price)}{'\n'}
              Page Count: ${(item.pageCount)}{'\n'}
              Preço: ${(item.prices[0].price)}{'\n'}
              Preço: ${(item.prices[0].price)}{'\n'}
        </Text>
        
        </View>
        <Text style={[styles.text,{color:'#000'}]}>
            {'\n'}
        </Text>
</View>
        
    )
}
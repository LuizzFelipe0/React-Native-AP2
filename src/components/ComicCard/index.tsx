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
        <Image source={{
            uri:item.thumbnail.path+"/portrait_fantastic."+item.thumbnail.extension
            }} style={styles.image}
            />
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>HandleOpenModal()}
            {...rest}
        >
            <Text style={styles.text}>
              ${(item.prices[0].price)}
            </Text>
            
        </TouchableOpacity>
</View>
        
    )
}
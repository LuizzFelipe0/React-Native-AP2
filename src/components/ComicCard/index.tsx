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
              Price:{'\n'}<Text style={{color:'#ED1D24'}}>${(item.prices[0].price)}{'\n'}{'\n'}</Text>
              Page Count:{'\n'}<Text style={{color:'#ED1D24'}}>{(item.pageCount)} pages{'\n'}{'\n'}</Text>
              Release Date: {'\n'}<Text style={{fontSize:11,color:'#ED1D24'}}>{(item.dates[0].date)}{'\n'}{'\n'}</Text>
              Format:{'\n'}<Text style={{color:'#ED1D24'}}>{(item.format)}{'\n'}</Text>
        </Text>
        
        </View>
        <Text style={[styles.text,{color:'#000'}]}>
            {'\n'}
        </Text>
</View>
        
    )
}
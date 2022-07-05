import React from 'react';
import { TouchableOpacity,TouchableOpacityProps, Text, Image,View } from 'react-native';
import { styles } from './styles';
import {charactersList} from './../../screens/MarvelList'

interface HeroCardProps extends TouchableOpacityProps {
    item: charactersList,
    setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>
    setCharacterId: React.Dispatch<React.SetStateAction<Number>>,
}

export function HeroCard({ item,setModalVisibility,setCharacterId, ...rest } : HeroCardProps ) {

    function HandleOpenModal () {
        setModalVisibility(true);
        setCharacterId(item.id);
    }

    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>HandleOpenModal()}
            {...rest}
        >
            <Image source={{
                uri:item.thumbnail.path+"/standard_small."+item.thumbnail.extension
            }} style={styles.image}
            
            />
            <Text style={styles.text}>
                {item.name}

            </Text>
            
        </TouchableOpacity>

        
    )
}
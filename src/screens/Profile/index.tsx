import React from "react"
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native"
import { styles } from "./styles"

export const Profile = () => {
    return (<View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.image} source={{ uri: "https://see.fontimg.com/api/renderfont4/Dj83/eyJyIjoiZnMiLCJoIjo3NCwidyI6MTAwMCwiZnMiOjc0LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGMEQwRCJ9/TWV1IFBlcmZpbA/marvel-regular.png" }} />
        </View>
        <Image style={styles.avatar} source={null} />
        <Text style={styles.text}>Nome</Text>

    </View>
    )
}
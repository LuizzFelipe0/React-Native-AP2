import { View,Image,Text } from "react-native"
import { styles } from "./styles"

export const Profile = () => {
    return (<View style={styles.container}>

        <Image style={styles.image} source={{ uri: "https://see.fontimg.com/api/renderfont4/Dj83/eyJyIjoiZnMiLCJoIjo3NywidyI6MTAwMCwiZnMiOjc3LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0YyMTAxMCJ9/UGVyZmls/marvel-regular.png" }} />
        
        <Image style={styles.avatar} source={null}/>
        <Text style={styles.text}>Nome</Text>
    
    </View>
)
}
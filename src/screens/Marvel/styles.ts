import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 60,
        paddingHorizontal: 30
    },

    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },

    bemVindos: {
        textAlign:"center",
        color: '#fff',
        marginTop: 20,
        fontSize: 20,
        marginBottom: 20 

    },

    descricao: {
        textAlign: "justify",
        color: '#fff'
    },

    image: {
        width: 250, 
        height: 95,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20       
    },

    imageUniverso: {
        width: 300, 
        height:200,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20       
    }


})
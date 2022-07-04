import { Platform, StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#000',
        paddingTop: 60,
        paddingHorizontal: 30,
        alignContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign:'center'
    },
    imageLogo: {
        width: 150, 
        height: 150,
    },
    imageButton:{
        width: 20, 
        height: 20,
        paddingRight:50,
        
   
    },
    text: {
        marginLeft: 5,
        textAlign:"center",
        color: '#FFF',
        fontSize: 14,
    },
    input: {
        backgroundColor:'#80808080',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 200,
        width: 300,
        placeholderTextColor:'#808080'
    },
    button: {
        backgroundColor:'#E60023',
        width: 300,
        padding: 15,
        borderRadius: 200,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    },

})

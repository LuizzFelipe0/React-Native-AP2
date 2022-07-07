import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 40,
        alignItems: 'center',
        alignSelf:'center',
        marginVertical: 5,
        flexDirection: "column",
        width:325,
        
    },
    button: {
        backgroundColor: '#ED1D24',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: "row",
        
    },
    title: {
        alignSelf:'center',
        padding: 5,
        color:  '#0B0930',
        fontSize: 22,
        fontWeight: 'bold',
    },
    text: {
        marginLeft: 5,
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        borderRadius:5,
        width: 168, 
        height: 254,
        borderColor:'#ED1D24',
        borderWidth:2,
    }
})
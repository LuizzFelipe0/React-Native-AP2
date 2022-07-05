import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: "column",
        width:300 ,
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
        fontSize: 22,
        fontWeight: 'bold',
    },
    image: {
        borderRadius:20,
        width: 168, 
        height: 254
    }
})
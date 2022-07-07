import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121015',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 260,
    height: 60,
    marginLeft: 42.5
  },
  text: {
    color: '#121015',
    fontSize: 24,
    fontWeight: 'bold',
    margin:5,

  },
  text1: {
    color: '#121015',
    fontSize: 14,
    fontWeight: 'bold',
    margin:5,

  },
  avatar: {
    width: 150,
    height: 150,
    borderWidth: 2.5,
    borderColor: "red",
    borderRadius: 75,
  },
  ListItem: {
    width: 150,
    height: 150,
    borderWidth: 2.5,
    backgroundColor: "red",
    borderRadius: 75.
    
  },
  header: {
       color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 30,
        paddingTop: 60,
        marginTop:10,
        marginRight:160
  },
  block:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor:"#FFF",
    margin:50,
    borderRadius:30,
    padding:50,
    borderColor:'#fff',
    borderWidth:2.5
    
  },
  input: {
    backgroundColor:'#121015',
    color: '#fff',
    fontSize: 15,
    padding: 20,
    paddingleft: 10,
    marginTop: 30,
    borderRadius: 10,
    width: 190,
    
},
})
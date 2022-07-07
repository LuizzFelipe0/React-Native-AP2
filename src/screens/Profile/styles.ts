import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 260,
    height: 60,
    marginLeft: 42.5
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    margin:15
  },
  avatar: {
    width: 150,
    height: 150,
    borderWidth: 2.5,
    borderColor: "#fff",
    borderRadius: 75,
    marginTop: 10
  },
  ListItem: {
    width: 150,
    height: 150,
    borderWidth: 2.5,
    backgroundColor: "red",
    borderRadius: 75
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 80,
    backgroundColor: "red",
    paddingHorizontal: 15,
    borderWidth: 2.5,
    borderColor: '#FFF',
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
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
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 150,
    height: 150,
    borderWidth: 2.5,
    borderColor: "#fff",
    borderRadius: 75,
    marginTop:'10%'
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
    borderColor:'#FFF',
  }
})
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

class services extends Component {

    state = {
        name: 'Pedro',
        email: 'pedro@gmail.com',
        password: '12345678',
    };
    
    onRequest = async () => {
        try {
            const res = await axios.post('http://10.0.3.2:3000/posts', { ...this.state});
            return res.data;
        } catch (error) {
            console.log('erro: ', error)
        }
    };

    render () {
        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={this.onRequest} style={styles.button}>
                    <Text style={styles.text}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#eee',
        width: 200,
        height: 40
    },
    text: {
        color: '#000',
        alignItems: 'center'
    }
})
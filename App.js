import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import { MarvelList } from './src/screens/MarvelList';
import { ComicList } from './src/screens/ComicList';
import { Registration } from './src/screens/Registration';
import { Router } from './src/routes';


export default function App() {
  return (
    <Router/>
    // <Registration/>
  )
}

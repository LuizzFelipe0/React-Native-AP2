import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import { MarvelList } from './src/screens/MarvelList';
import { ComicList } from './src/screens/ComicList';
import { Registration } from './src/screens/Registration';
import { Profile } from './src/screens/Profile';
import { services } from './src/services/login';

export default function App() {
  return (
    <Registration/>
  )
}

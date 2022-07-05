import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import { MarvelList } from './src/screens/MarvelList';
import { ComicList } from './src/screens/ComicList';

export default function App() {
  return (
    <ComicList/>
  )
}

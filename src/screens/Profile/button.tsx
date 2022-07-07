import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Botao(props) {
  const { onPress, title = 'Selecionar Imagem da Galeria' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12.5,
    paddingHorizontal: 32.5,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 17.5,
    lineHeight: 12.5,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
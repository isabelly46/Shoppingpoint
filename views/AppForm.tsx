import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default function AppForm({ route }) {
  const { cpf, nome, vaga } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <Text>Mesa Reservada!</Text>
      <Text>Nome: {nome}</Text>
      <Text>Cpf: {cpf}</Text>
      <Text>Vaga: {vaga.mesa.indentificador}</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#210661'
  },
  main: {
    width: '95%',
    height: '50%',
    borderRadius: 4,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textReservada: {
    fontSize: 10
  }
});
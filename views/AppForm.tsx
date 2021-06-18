import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { color } from 'react-native-reanimated';
 
export default function AppForm({ route }) {
  const { cpf, nome, vaga } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <Image
          style={styles.tinyLogo}
          source={{
          uri: 'https://i.imgur.com/qcACBH3.png',
          }}
      />
      <Text style={styles.textReservada}>Mesa Reservada!</Text>
      <Text style={styles.text}>Nome: {nome}</Text>
      <Text style={styles.text}>CPF: {cpf}</Text>
      <Text style={styles.text}>Vaga: {vaga.mesa.indentificador}</Text>
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
    fontSize: 30,
    color: '#eb4034'
  },
  tinyLogo: {
    width: 80,
    height: 80
  },
  text: {
    fontSize: 25
  }

});
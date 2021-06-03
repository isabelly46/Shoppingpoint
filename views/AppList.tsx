import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import api from '../service/api.service';


const data = [
  {
    "empresa": {
      "cnpj": "91.366.643/0001-09",
      "endereco": "Rua João José Alves, N 363, São José do Rio Preto-SP",
      "fantasia": "Shopping Point",
      "id": 1,
      "inativo": false,
    },
    "id": 28,
    "indentificador": "Mesa 28",
    "ocupada": false,
    "quantidade": 0,
    "quantidadelimite": 5,
  },
]


export default function AppList({ route, navigation }) {
  
  const { cpf } = route.params;
  const [mesas, setMesas] = useState();

  
  const renderItem = ({ item } ) => {    
    return  (
      <View >
        <Text>{`${item.indentificador}`}</Text>
      </View>
    );
  }

  useEffect(() => {

    api.get('/mesas')
    .then( ({ data }) =>  { 
      setMesas(data.mesas);
    });

  }, [mesas])


  return (
    <View style={styles.container}>
      <Text>Lista! {cpf}</Text>
      <StatusBar/>
      <SafeAreaView style={styles.container}>
      <FlatList
        data={mesas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
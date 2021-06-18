import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, Alert } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
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
  
  const { cpf, nome } = route.params;
  const [mesas, setMesas] = useState();
  const [selectedId, setSelectedId] = useState(null);

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <View style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.indentificador}</Text>
      <View style={[styles.btn]}>
      {/* <Button title="Próximo" color="#b30202" onPress={() => Alert.alert('Simple Button pressed')} disabled={item.ocupada} /> */}
      </View>
    </View>
  );
  

  
  const renderItem = ({ item } ) => { 
    const backgroundColor = item.ocupada === true ? "#6e3b6e" : "#f9c2ff";
    const color = item.ocupada === true ? 'white' : 'black';

    return  (
      <TouchableWithoutFeedback onPress={() => selecionarMesa(item)}>
        <Item
          item={item}
          onPress={() => selecionarMesa(item)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      </TouchableWithoutFeedback>
    );
  }

  const selecionarMesa = async (item: any) => {
    setSelectedId(item.id);
    console.log("MESA SELECIONADA")
    await reservarMesa(item);
  };

  const reservarMesa= async (item: any) => {
    if(item.ocupada) {
      return;
    }
    console.log("RESERVANDO MESA");
    const dataAtual = (new Date()).toISOString();
    let dataDepois = new Date();
    dataDepois.setHours(dataDepois.getHours() + 1);
    let dataDepoisFormatada = dataDepois.toISOString();
    const vaga = {
      empresa: item.empresa,
      mesa: item,
      cpf: cpf,
      expiresIni: dataAtual,
      expires: dataDepoisFormatada
    }
    await api.post('/vagas', vaga);
    navigation.navigate('Form', {
      cpf: cpf,
      nome: nome,
      vaga: vaga
  });

  };

  useEffect(() => {

    api.get('/mesas')
    .then( ({ data }) =>  { 
      setMesas(data.mesas);
    });

  }, [mesas])


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selecione uma mesa</Text>
      <StatusBar/>
      <FlatList
        style={styles.main}
        data={mesas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={10}
        windowSize={5}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={30}
        removeClippedSubviews={false}
        onEndReachedThreshold={0.1}
      />
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
  main: {
    width: '95%',
    height: '50%',
    borderRadius: 4,
    backgroundColor: '#ffff',
    flex: 1
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
  },
  btn: {
    width: '50%'
  },
  text: {
    fontSize: 20,
    color: '#ffff'
  }
});
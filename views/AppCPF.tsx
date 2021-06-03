import React, { useState } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 
import AppList from './AppList';
import AppForm from './AppForm';
import { View, Text, StyleSheet, Image, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
 
const {Navigator, Screen} = createBottomTabNavigator();
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


 
function AppCPF({ navigation }){
    const [getCPF, setCPF] = useState("");

    const setValueCPF: (value: any) => void = (cpf: any) => {
        console.log(cpf);
        setCPF(cpf);
    };

    const enviarCPF: (value: any) => void  = (value) => {
        navigation.navigate('List', {
            cpf: getCPF
        });
    };

    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          width: '60%',
          textAlign: 'center',
          borderWidth: 2,
          borderColor: '#000',
          borderStyle: 'solid',
          borderRadius: 2,
          padding: 2,
        },
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
        tinyLogo: {
            width: 50,
            height: 65
        },
      });

    return (
        <> 
            <View style={styles.container}> 
            <View style={styles.main}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: 'https://i.imgur.com/yU2n30W.png',
                    }}
                />
                <Text>Shopping Point</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setValueCPF}
                    value={getCPF}
                    placeholder="CPF"
                    keyboardType="numeric"
                />
                <Button title="Próximo" color="#b30202" onPress={enviarCPF}></Button>
            </View>
            </View>     
        </>
    );

    
}
 
export default AppCPF;
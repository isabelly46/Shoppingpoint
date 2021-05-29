import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 
import AppList from './AppList';
import AppForm from './AppForm';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
 
const {Navigator, Screen} = createBottomTabNavigator();
 
function AppCPF(){
    const [text, onChangeText] = React.useState("");
    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          textAlign: 'center'
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
            backgroundColor: '#ffff'
        },
        tinyLogo: {
            width: 50,
            height: 50
        },
      });

    return (
        <> 
            <View style={styles.container}> 
            <View style={styles.main}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text>Shopping Point</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="CPF"
                    keyboardType="numeric"
                />
            </View>
            </View>     
        </>
    );

    
}
 
export default AppCPF;
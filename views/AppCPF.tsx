import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 
import AppList from './AppList';
import AppForm from './AppForm';
import { View, Text } from 'react-native';
 
const {Navigator, Screen} = createBottomTabNavigator();
 
function AppCPF(){
    const nome = 'Isabelly'
    return (
        <> 
            <View> 
            <Text>Shopping Point{nome}</Text>
            </View>     
        </>
    );
}
 
export default AppCPF;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
 
import AppCPF from './views/AppCPF';
import AppList from './views/AppList';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="CPF">
        <Stack.Screen name="CPF" component={AppCPF} />
        <Stack.Screen name="List" component={AppList} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

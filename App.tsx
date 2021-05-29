import { StatusBar } from 'expo-status-bar';
import React from 'react';
 
import AppCPF from './views/AppCPF';
import { NativeRouter, Route, Link } from "react-router-native";
 
export default function App() {
  return (
    <>
      <NativeRouter>
      <Route exact path="/" component={AppCPF} />
      
      </NativeRouter>
      
    </>
  );
}

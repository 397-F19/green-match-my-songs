import React, { Component, useState, useEffect} from "react";
import { Text, StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import PlaylistPage from './src/playlist.page';
import LoginScreen from './src/loginPage';



export default function App() {
  
  return (
  	<PaperProvider>
  		<PlaylistPage />   
    </PaperProvider>
    //<LoginScreen/>
  );
}
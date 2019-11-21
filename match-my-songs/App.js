import React, { Component, useState, useEffect} from "react";
import { Text, StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import PlaylistScreen from './src/playlist.page';
import LoginScreen from './src/loginPage';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Playlist: {screen: PlaylistScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

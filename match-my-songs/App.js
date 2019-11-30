import * as React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlaylistScreen from './src/playlist.page';
import LoginScreen from './src/loginPage';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Playlist" component={PlaylistScreen}/>
      </Stack.Navigator>
    </NavigationNativeContainer>
  )
}

export default App;

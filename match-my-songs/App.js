import * as React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import PlaylistScreen from './src/playlist.page';
import LoginScreen from './src/loginPage';

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationNativeContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Login') {
              iconName = `ios-information-circle${focused? '' : '-outline'}`
              return <Ionicons name={iconName} color={color} size={size}/>
            } else if (route.name === 'Playlist'){
              iconName = `music-circle${focused? '' : '-outline'}`
              return <MaterialCommunityIcons name={iconName} color={color} size={size}/>
            }

          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Login" component={LoginScreen}/>
        <Tab.Screen name="Playlist" component={PlaylistScreen}/>
      </Tab.Navigator>
    </NavigationNativeContainer>
  )
}

export default App;

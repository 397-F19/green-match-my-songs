import * as React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Usercontext, SongcontextProvider } from './src/context'
import PlaylistScreen from './src/playlist.page';
import LoginScreen from './src/loginPage';
import UserInfoScreen from './src/UserInfoPage';
import MatchedlistScreen from './src/MatchedSongs'

const Root = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = ({route}) => {

  return(
    <Usercontext.Provider value={route.params['user']}>
    <SongcontextProvider>
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'User Info') {
              iconName = `ios-information-circle${focused? '' : '-outline'}`
              return <Ionicons name={iconName} color={color} size={size}/>
            } else if (route.name === 'Selected For You'){
              iconName = `music-circle${focused? '' : '-outline'}`
              return <MaterialCommunityIcons name={iconName} color={color} size={size}/>
            } else if (route.name === 'Matched Songs') {
              iconName = `heart-circle${focused? '' : '-outline'}`
              return <MaterialCommunityIcons name={iconName} color={color} size={size}/>
            }

          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="User Info" component={UserInfoScreen}/>
        <Tab.Screen name="Selected For You" component={PlaylistScreen}/>
        <Tab.Screen name="Matched Songs" component={MatchedlistScreen}/>
      </Tab.Navigator>
      </SongcontextProvider>
      </Usercontext.Provider>
  )
}

const App = () => {
  return(
    <NavigationNativeContainer>
      <Root.Navigator mode="modal" headerMode="none">
        <Root.Screen name="Login" component={LoginScreen}/>
        <Root.Screen name="Main" component={MainScreen}/>
      </Root.Navigator>
    </NavigationNativeContainer>
  )
}

export default App;
import * as React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import PlaylistScreen from './src/playlist.page';
import LoginScreen from './src/loginPage';
import UserInfoScreen from './src/UserInfoPage';

const Root = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = ({route}) => {
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'UserInfo') {
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
        <Tab.Screen name="UserInfo">
          { props => <UserInfoScreen {...props} route={route} /> }
        </Tab.Screen>
        <Tab.Screen name="Playlist">
          { props => <PlaylistScreen {...props} route={route} /> }
        </Tab.Screen>
      </Tab.Navigator>
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

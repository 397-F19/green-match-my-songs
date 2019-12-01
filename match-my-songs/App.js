import * as React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import PlaylistScreen from './src/playlist.page';
import LoginScreen from './src/loginPage';
import UserInfoScreen from './src/UserInfoPage';
import MatchedlistScreen from './src/MatchedSongs'

const Root = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = ({route}) => {
  const [songs,setSongs] = React.useState([])
  const [matched,setMatched] = React.useState([])

  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'UserInfo') {
              iconName = `ios-information-circle${focused? '' : '-outline'}`
              return <Ionicons name={iconName} color={color} size={size}/>
            } else if (route.name === 'For You'){
              iconName = `music-circle${focused? '' : '-outline'}`
              return <MaterialCommunityIcons name={iconName} color={color} size={size}/>
            } else if (route.name === 'MatchedSongs') {
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
        <Tab.Screen name="UserInfo">
          { props => <UserInfoScreen {...props} route={route} /> }
        </Tab.Screen>
        <Tab.Screen name="For You">
          { props => <PlaylistScreen {...props} route={route} songs={songs} setsongs={setSongs} matched={matched} setmatched={setMatched}/> }
        </Tab.Screen>
        <Tab.Screen name="MatchedSongs">
          { props => <MatchedlistScreen {...props} matched={matched}/> }
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

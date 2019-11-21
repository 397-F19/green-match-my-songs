import React, { Component } from "react";
import { AuthSession } from 'expo';
import styles from "./styles";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios'

//Spotify Stuff
const authEndpoint = 'https://accounts.spotify.com/authorize?'
const CLIENT_ID = "690c30f6add5454c8a5660405b6b228c";
const scopesArr = ['user-modify-playback-state','user-read-currently-playing','user-read-playback-state','user-library-modify',
                   'user-library-read','playlist-read-private','playlist-read-collaborative','playlist-modify-public',
                   'playlist-modify-private','user-read-recently-played','user-top-read'];
const scopes = scopesArr.join(' ');

export default class LoginScreen extends Component {

  state = {
    userInfo: null,
    didError: false
  };
  
  handleSpotifyLogin = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    console.log(redirectUrl)
    let results = await AuthSession.startAsync({
      authUrl:
      'https://accounts.spotify.com/authorize?client_id=690c30f6add5454c8a5660405b6b228c&redirect_uri=' + encodeURIComponent(redirectUrl) + 
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') + '&response_type=token'
    });

    if (results.type !== 'success') {
      this.setState({ didError: true });
    } else {
      const userInfo = await axios.get(`https://api.spotify.com/v1/me`, {
        headers: {
          "Authorization": `Bearer ${results.params.access_token}`
        }
      });
      this.setState({ userInfo: userInfo.data });
      console.log(userInfo);
      this.props.navigation.navigate('Playlist', {user: userInfo})
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Match My Songs</Text>
            <FontAwesome style = {styles.spotifyLogo}
              name="spotify"
              color="#2FD566"
              size={128}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.handleSpotifyLogin()}
              //color="#3897f1"
              title="Login with Spotify"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }
  /*
  async onFbLoginPress() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }
  */
}

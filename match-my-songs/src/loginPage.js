import React, { useState } from "react";
import { AuthSession } from 'expo';
import styles from "./styles";
import {Keyboard, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
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

const LoginScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = useState(null);
  const [didError, setDidError] = useState(false);
  
  const handleSpotifyLogin = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    console.log(redirectUrl)
    let results = await AuthSession.startAsync({
      authUrl:
      'https://accounts.spotify.com/authorize?client_id=690c30f6add5454c8a5660405b6b228c&redirect_uri=' + encodeURIComponent(redirectUrl) + 
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') + '&response_type=token'
    });

    if (results.type !== 'success') {
      setDidError(true);
    } else {
      const tempuserInfo = await axios.get(`https://api.spotify.com/v1/me`, {
        headers: {
          "Authorization": `Bearer ${results.params.access_token}`
        }
      });
      setUserInfo(tempuserInfo.data);
      console.log(tempuserInfo);
      navigation.navigate('Playlist', {user: tempuserInfo})
    }
  };

  return(
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
            onPress={() => handleSpotifyLogin()}
            //color="#3897f1"
            title="Login with Spotify"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
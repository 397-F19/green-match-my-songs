import React,{useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import Config from './config.component';
import styles from './styles';
import { Provider as PaperProvider } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class PlaylistScreen extends React.Component {
    constructor () {
        super()
        this.state = {
            songs:[]
        }
        this.handlesong = this.handlesong.bind(this);
    }

    handlesong(items){
        this.setState({
            songs: items
        })
    }

    render() {
        user = this.props.navigation.state.params["user"];
        token = ""
        try {
            token = user.config.headers.Authorization.split(" ")[1]
        }
        catch {
            console.log("Failed to get auth token")
        }
        return(
            <PaperProvider>
                <React.Fragment>
                    <View style={styles.container}>
                        <Text style={styles.playlist}>
                        {this.state.songs.length!==0?this.state.songs[0].added_at:'test'}       
                        </Text>
                        <Config token = {token} style={styles.configDialog} handlesong={this.handlesong} />
                    </View>                                
                </React.Fragment>  
            </PaperProvider>
        )
    }
}

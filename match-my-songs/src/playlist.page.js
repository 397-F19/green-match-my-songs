import React,{useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import Config from './config.component';
import styles from './styles';
import { Provider as PaperProvider } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class PlaylistScreen extends React.Component {
    render() {
        return(
            <PaperProvider>
                <React.Fragment>
                    <View style={styles.container}>
                        <Text style={styles.playlist}>
                        I am the playlist       
                        </Text>
                        <Text style={styles.playlist}>
                        I am the playlist       
                        </Text>
                        <Text style={styles.playlist}>
                        I am the playlist       
                        </Text>
                        <Text style={styles.playlist}>
                        I am the playlist       
                        </Text>
                        <Text style={styles.playlist}>
                        I am the playlist       
                        </Text>
                        <Config style={styles.configDialog} />
                    </View>                                
                </React.Fragment>  
            </PaperProvider>
        )
    }
}

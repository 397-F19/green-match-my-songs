import React,{useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import Config from './config.component';
import styles from './styles';

export default function PlaylistPage () {

    return (
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
    );
    
};
import React from 'react';
import { View, Text } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { Linking } from 'expo';
import styles from './MatchedSongs.styles';

const MatchedSongs = ({matched}) => {

    return(
        <React.Fragment>
        <Header
            backgroundColor='white'
            centerComponent={<Text style={styles.title}>Matched Songs</Text>}
        />
        <View style={styles.list}>
            {matched.length!==0?matched.map((l,i)=>
            <ListItem 
                key={i}
                avatar={{ uri: l.track.album.images[2].url }}
                title={l.track.name}
                subtitle={l.track.artists.length>1?l.track.artists[0].name+'...':l.track.artists[0].name}
                bottomDivider
                rightIcon={<AntDesign name={'playcircleo'} color={'tomato'} size={30}/>}
                onPress={() => { Linking.openURL(l.track.external_urls.spotify) }}
            />)
            :<View style={styles.container}>
            <Text style={styles.text}>
                No Matched Song         
            </Text>
            </View>
            }
        </View>
        </React.Fragment>
    )

}

export default MatchedSongs;
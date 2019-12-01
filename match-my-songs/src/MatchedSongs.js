import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from './MatchedSongs.styles';

const MatchedSongs = ({matched}) => {

    return(
        <View style={styles.list}>
            {matched.length!==0?matched.map((l,i)=>
            <ListItem 
                key={i}
                avatar={{ uri: l.track.album.images[2].url }}
                title={l.track.name}
                subtitle={l.track.artists.length>1?l.track.artists[0].name+'...':l.track.artists[0].name}
                bottomDivider
                hideChevron={true}
            />)
            :<View style={styles.container}>
            <Text style={styles.text}>
                No Matched Song         
            </Text>
            </View>
            }
        </View>
    )

}

export default MatchedSongs;
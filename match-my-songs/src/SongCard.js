import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './SongCard.styles';

const SongCard = ({card}) => {

    return(
    <View
        activeOpacity={1}
        style={styles.card}
    >
        <Image
            style={styles.image}
            source={{uri: card.track.album.images[1].url}}
            resizeMode="cover"
        />
        <View style={styles.photoDes}>
            <Text style={styles.text}>
                {card.track.name}
            </Text>
            <Text style={styles.text}>
                {card.track.artists.length>1?card.track.artists[0].name+'...':card.track.artists[0].name}
            </Text>
        </View>
    </View>
    )

}

export default SongCard;
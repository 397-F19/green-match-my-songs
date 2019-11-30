import React,{ useState, useRef } from 'react';
import { View } from 'react-native';
import Config from './config.component';
import { Provider as PaperProvider } from 'react-native-paper';
import styles from './playlist.styles';
import Swiper from 'react-native-deck-swiper';
import SongCard from './SongCard';
import OverlayLabel from './OverlayLabel';
import IconButton from './IconButton';

const PlaylistScreen = ({route}) => {
    
    let user = route.params["user"];
    let token = ""
    try {
        token = user.config.headers.Authorization.split(" ")[1]
    }
    catch {
        console.log("Failed to get auth token")
    }

    const [songs,setSongs] = useState([])
    const swiper = useRef()
    const handlesong = (items) => {
        setSongs(items);
    }
            
    const handleOnSwipedLeft = () => swiper.current.swipeLeft()
    const handleOnSwipedRight = () => swiper.current.swipeRight()
      
    return(
        <React.Fragment>
        {songs.length!==0?
        <View style={styles.container}>
        <View style={styles.swipeContainer}>
        <Swiper
            ref={swiper}
            animateCardOpacity
            containerStyle={styles.container}
            cards={songs}
            renderCard={card => <SongCard card={card} />}
            cardIndex={0}
            backgroundColor="white"
            stackSize={2}
            infinite
            showSecondCard
            animateOverlayLabelsOpacity
            overlayLabels={{
                left: {
                    title: 'NOPE',
                    element: <OverlayLabel label="NOPE" color="#4CCC93"/>,
                    style:{
                        wrapper: styles.overlayWrapper,
                    }
                },
                right: {
                    title: 'LIKE',
                    element: <OverlayLabel label="LIKE" color="#E5566D"/>,
                    style:{
                        wrapper:{
                            ...styles.overlayWrapper,
                            alignItems: 'flex-start',
                            marginLeft: 30,
                        }
                    }
                }
            }}
        /> 
        </View>
        <View style={styles.buttonContainer}>
            <IconButton
                name="close"
                onPress={handleOnSwipedLeft}
                color="white"
                backgroundColor="#4CCC93"
            />
            <IconButton
                name="heart"
                onPress={handleOnSwipedRight}
                color="white"
                backgroundColor="#E5566D"
            />
        </View>
        </View>
        :<PaperProvider>
        <Config token = {token} style={styles.configDialog} handlesong={handlesong} />
        </PaperProvider> 
        }
        </React.Fragment>
        )
}

export default PlaylistScreen;
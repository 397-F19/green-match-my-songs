import React,{ useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import Config from './config.component';
import { Provider as PaperProvider } from 'react-native-paper';
import styles from './playlist.styles';
import Swiper from 'react-native-deck-swiper';
import SongCard from './SongCard';
import OverlayLabel from './OverlayLabel';
import IconButton from './IconButton';

const PlaylistScreen = ({route, songs, setsongs, matched, setmatched}) => {
    
    let user = route.params["user"];
    let token = ""
    try {
        token = user.config.headers.Authorization.split(" ")[1]
    }
    catch {
        console.log("Failed to get auth token")
    }

    const [disable,setDisable] =useState(false)
    const swiper = useRef()
    const handlesong = (items) => {
        setsongs(items);
    }
            
    const triggerSwipedLeft = () =>  swiper.current.swipeLeft()
    const triggerSwipedRight = () => swiper.current.swipeRight()
    const handleOnSwipedRight = (index) => {
        setmatched(matched.concat(songs[index]));
        if(index===songs.length-1) setDisable(true);
    }
    
    return(
        <React.Fragment>
        <Header
            backgroundColor='white'
            centerComponent={<Text style={styles.title}>Selected For You</Text>}
        />
        {songs.length!==0?
        <View style={styles.container}>
        <View style={styles.swipeContainer}>
        <Swiper
            ref={swiper}
            animateCardOpacity
            containerStyle={styles.container}
            cards={songs.concat([0,'end'])}
            renderCard={(card,index) => <SongCard card={card} index={index} user={user} />}
            cardIndex={0}
            backgroundColor="white"
            stackSize={2}
            showSecondCard
            animateOverlayLabelsOpacity
            disableTopSwipe={true}
            disableBottomSwipe={true}
            disableLeftSwipe={disable}
            disableRightSwipe={disable}
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
            onSwipedLeft={(index)=>{if(index===songs.length-1) setDisable(true)}}
            onSwipedRight={handleOnSwipedRight}
        /> 
        </View>
        <View style={styles.buttonContainer}>
            <IconButton
                name="close"
                onPress={triggerSwipedLeft}
                color="white"
                backgroundColor="#4CCC93"
                disable={disable}
            />
            <IconButton
                name="heart"
                onPress={triggerSwipedRight}
                color="white"
                backgroundColor="#E5566D"
                disable={disable}
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
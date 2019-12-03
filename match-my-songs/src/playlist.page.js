import React,{ useState, useRef, useContext } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import Config from './config.component';
import { Provider as PaperProvider } from 'react-native-paper';
import { Usercontext,Songcontext } from './context';
import Swiper from 'react-native-deck-swiper';
import SongCard from './SongCard';
import OverlayLabel from './OverlayLabel';
import IconButton from './IconButton';
import styles from './playlist.styles';

const PlaylistScreen = () => {

    const user = useContext(Usercontext);
    let token = ""
    try {
        token = user.config.headers.Authorization.split(" ")[1]
    }
    catch {
        console.log("Failed to get auth token")
        return (
          <div></div>
        );
    }

    const [songs,setSongs] = React.useState([])
    const [disable,setDisable] = useState(false);
    const [dislikedArtists, setDislikedArtists] = useState({});
    const [,,matched,setMatched] = useContext(Songcontext);
    const swiper = useRef();

    const handleSongs = (items) => {
        setSongs(items);
    }

    const triggerSwipedLeft = () =>  swiper.current.swipeLeft()
    const triggerSwipedRight = () => swiper.current.swipeRight()
    const handleOnSwipedLeft = (index) => {
      // TODO: Keep track of artists the user does not like.
      const currSong = songs[index];
      const currArtists = currSong.track.artists;
      for (let i = 0; i < currArtists.length; i++) {
        const currArtist = currArtists[i]['name'];
        if (!dislikedArtists.hasOwnProperty(currArtist)) {
          dislikedArtists[currArtist] = 0;
        }
        dislikedArtists[currArtist] += 1;
      }
      setDislikedArtists(dislikedArtists);
      console.log(dislikedArtists);

      // TODO: Update song list by removing songs by artists disliked 3 times.
      if (index === songs.length - 1) setDisable(true);
    }
    const handleOnSwipedRight = (index) => {
        setMatched(matched.concat(songs[index]));
        if (index === songs.length - 1) setDisable(true);
    }

    return (
      <React.Fragment>
        <Header
            backgroundColor='white'
            centerComponent={<Text style={styles.title}>Selected For You</Text>}
        />
        {songs.length !==0 ?
        <View style={styles.container}>
          <View style={styles.swipeContainer}>
          <Swiper
              ref={swiper}
              animateCardOpacity
              containerStyle={styles.container}
              cards={songs.concat([0,'end'])}
              renderCard={(card, index) => <SongCard card={card} index={index} user={user} />}
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
              onSwipedLeft={handleOnSwipedLeft}
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
        <Config token = {token} style={styles.configDialog} handleSongs={handleSongs} />
        </PaperProvider>
        }
      </React.Fragment>
  )
}

export default PlaylistScreen;

import React from 'react';
import { View } from 'react-native';
import Config from './config.component';
import { Provider as PaperProvider } from 'react-native-paper';
import styles from './playlist.styles';
import Swiper from 'react-native-deck-swiper';
import SongCard from './SongCard';
import OverlayLabel from './OverlayLabel';

export default class PlaylistScreen extends React.Component {
    constructor () {
        super()
        this.swiper = React.createRef().current
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

        if(this.state.songs.length!==0)
        return(
            <React.Fragment>
            <View style={styles.swipeContainer}>
            <Swiper
                ref={this.swiper}
                animateCardOpacity
                containerStyle={styles.container}
                cards={this.state.songs}
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
            {/* <PaperProvider>
            <Config token = {token} style={styles.configDialog} handlesong={this.handlesong} />
            </PaperProvider> */}
        </React.Fragment>
        )
        else return(
            <PaperProvider>
            <Config token = {token} style={styles.configDialog} handlesong={this.handlesong} />
            </PaperProvider>
        )
    }
}

import { StyleSheet, Dimensions } from 'react-native';

const {height} = Dimensions.get('window');

const colors = {
    white: '#fff',
    black: '#000',
    nope: '#E5566D',
    like: '#4CCC93',
    favorite: '#3CA3FF',
}

const styles = StyleSheet.create({
    card:{
        marginTop: 50,
        height: height-410,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 5,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
    },
    image:{
        borderRadius: 5,
        flex: 1,
        width: '100%',
    },
    photoDes:{
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexDirection: 'column',
        height: '100%',
        position: 'absolute',
        left: 10,
        bottom: 10,
    },
    text:{
        textAlign: 'center',
        fontSize: 20,
        color: colors.white,
        fontFamily: 'Avenir',
        textShadowColor: colors.black,
        textShadowRadius: 10,
    },
    endtext:{
        textAlign: 'center',
        fontSize: 70,
        fontWeight: 'bold',
    }
})

export default styles;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    welcome:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar:{
        width:150,
        height:150,
    },
    avatarcontainer:{
        marginBottom:80,
    },
    text:{
        textAlign: 'center',
        fontSize: 27,
        fontFamily: 'Avenir',
    },
    logoutButton:{
        backgroundColor: '#1DB954',
        borderRadius: 5,
        height: 45,
        width: 150,
        marginTop: 15,
    },
})

export default styles;
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom: -10
    },
    list:{
        marginTop:10,
    },
    container:{
        height: height-300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listtitle:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'purple'
    },
    text:{
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    }
})

export default styles;
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom: -10
    },
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    swiperContainer: {
        height: height - 250,
    },
    buttonContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '15%',
        marginBottom: 100,
    },
    overlayWrapper: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: -30
    },
    configDialog:{
        height: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioContainer: {
        flex: 1,
        paddingVertical: 8,
    },
    plusButton:{
    flex:1,
    margin:90,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', 
    marginTop: 670,                                        
  },
})

export default styles;
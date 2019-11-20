import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
    flex: 1,
    height: winHeight,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  	playlist: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
    configDialog:{
    height: 1000,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    radioContainer: {
    flex: 1,
    paddingVertical: 8,
  },
    row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
    plusButton:{
    margin: 90,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',                                          
                                                 

    }
});
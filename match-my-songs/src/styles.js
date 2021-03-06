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
  containerView: {
    flex: 1,
  },
  //LOGIN SCREEN Styles
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 200,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  
  },
  loginButton: {
    backgroundColor: '#1DB954',
    borderRadius: 5,
    height: 45,
    marginTop: 30,
  },
    plusButton:{
    flex:1,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',                                          
  },

 spotifyLogo:{
   display: "flex",
   alignItems: "center",
   justifyContent: 'center',
   marginLeft: '35%',
   marginRight: '15%'
 }
});
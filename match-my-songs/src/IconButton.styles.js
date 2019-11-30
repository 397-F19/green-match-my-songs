import { StyleSheet } from 'react-native';

const colors = {
    white: '#fff',
    black: '#000',
    nope: '#E5566D',
    like: '#4CCC93',
    favorite: '#3CA3FF',
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: 'transparent',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
        padding: 15,        
    }
})

export default styles;
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button, Header } from 'react-native-elements';
import styles from './UserInfo.styles'

const UserInfo = ({route, navigation}) => {
    let userinfo = route.params['user'].data;

    return(
        <React.Fragment>
        <Header
            backgroundColor='white'
            centerComponent={<Text style={styles.title}>User Info</Text>}
        />
        <View style={styles.welcome}>
            <Avatar
                rounded
                source={
                    userinfo.images.length===0? require('./AppleMusic.jpg'):{uri: userinfo.images[0].url}
                }
                avatarStyle={styles.avatar}  
                containerStyle={styles.avatarcontainer}       
            />
            <Text style={styles.text}>
                {`Hi ${userinfo.display_name}`}
            </Text>
            <Text style={styles.text}>
                Welcome to Match My Songs!
            </Text>
            <Button
                title="Log Out"
                buttonStyle={styles.logoutButton}
                onPress={() => navigation.navigate('Login')}
            />
        </View>
        </React.Fragment>
    )
}

export default UserInfo;
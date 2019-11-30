import React from 'react';
import { View, Text } from 'react-native';
import styles from './UserInfo.styles'

const UserInfo = ({route}) => {
    let userinfo = route.params['user'].data;

    return(
        <View style={styles.welcome}>
            <Text style={styles.text}>
                {`Hi ${userinfo.display_name}`}
            </Text>
            <Text style={styles.text}>
                Welcome Match My song!
            </Text>
        </View>
    )
}

export default UserInfo;
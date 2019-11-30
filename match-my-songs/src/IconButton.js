import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './IconButton.styles';

const IconButton = ({ name, onPress, color, backgroundColor, disable }) => (
    <TouchableOpacity
        style={[styles.Button, disable?{backgroundColor:"#626567"}:{backgroundColor}]}
        onPress={onPress}
        activeOpacity={0.85}
        disabled={disable}
    >
        <Icon
            name={name}
            size={20}
            color={color}
        />
    </TouchableOpacity>
)

export default IconButton;

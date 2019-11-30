import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './IconButton.styles';

const IconButton = ({ name, onPress, color, backgroundColor }) => (
    <TouchableOpacity
        style={[styles.Button, {backgroundColor}]}
        onPress={onPress}
        activeOpacity={0.85}
    >
        <Icon
            name={name}
            size={20}
            color={color}
        />
    </TouchableOpacity>
)

export default IconButton;

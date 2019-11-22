import React from 'react';
import { View, Text } from 'react-native';
import styles from './OverlayLabel.styles';

const OverlayLabel = ({ label, color }) => (
    <View style={[styles.overlayLabel, {borderColor: color}]}>
        <Text style={[styles.overlayLabelText, {color}]}>
            {label}
        </Text>
    </View>
)

export default OverlayLabel;
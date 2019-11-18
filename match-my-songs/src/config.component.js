import React, { Component, useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Button, Text, View, ViewPropTypes } from "react-native";
import { Dialog, DialogDefaultActions } from 'react-native-material-ui';
import styles from './styles';

export default function Config(){

	const propTypes = {
    actions: PropTypes.arrayOf(PropTypes.string).isRequired,
    options: PropTypes.shape({
      actionName: { disabled: PropTypes.bool }
    }),
    onActionPress: PropTypes.func.isRequired,
    style: PropTypes.shape({
        defaultActionsContainer: ViewPropTypes.style,
    }),
};

  return (
    <View>
      <Dialog style={styles.configDialog}>
        <Dialog.Title><Text>Hello world</Text></Dialog.Title>
        <Dialog.Content>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <DialogDefaultActions
             actions={['cancel', 'ok']}
             /**
             * this will disable the button for "ok"
             */
             options={{ ok: { disabled: true } }}
             onActionPress={() => {}}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
);

};


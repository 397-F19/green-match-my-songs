import React, { Component, useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Button, Text, View, ViewPropTypes } from "react-native";
import { Checkbox, Dialog, DialogDefaultActions } from 'react-native-material-ui';
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
        <Dialog.Title><Text>Playlist Generation</Text></Dialog.Title>
        <Dialog.Content>
          <Text>
            Selet your activity and get a playlist generated with one click
          </Text>
          <Checkbox label="Study" value="study" checked={true} />
          <Checkbox label="Work out" value="work out" checked={false} />
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


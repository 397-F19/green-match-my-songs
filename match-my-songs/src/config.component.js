import React, { Component, useState, useEffect} from "react";
import { View, ScrollView } from 'react-native';
import { Text, Divider, RadioButton, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import styles from './styles';

export default function Config(){
  [visible, setVisible]=useState(true);
  [value, setValue]=useState('first');
  const showDialog = () => {setVisible(true)};
  const hideDialog = () => {setVisible(false)};

  return (
      <View>
        <Button onPress={showDialog}>Generate Playlist</Button>
        <Portal>
          <Dialog
             visible={visible}
             onDismiss={hideDialog}>
            <Dialog.Title>Playlist generator for your activity</Dialog.Title>
              <Dialog.ScrollArea style={{ maxHeight: 500}}>
                <ScrollView>      
                  <Paragraph style={{paddingVertical: 10}}>
                  Selet your activity and get a playlist generated with one click</Paragraph>
                  <Divider />

                  <View style={styles.radioContainer}>

                  <RadioButton.Group
                    value={value}
                    onValueChange={(value) => setValue({value})} 
                  >

                  <View style={styles.row}>
                    <Text>Work out</Text>
                    <RadioButton value="first" />
                  </View>

                  <View style={styles.row}>
                    <Text>Relax</Text>
                    <RadioButton value="second" />
                  </View>

                  </RadioButton.Group>
                  </View>

                
                </ScrollView>
              </Dialog.ScrollArea>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
      );
}



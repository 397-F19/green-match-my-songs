import React, { Component, useState, useEffect} from "react";
import { View, ScrollView } from 'react-native';
import { Text, Divider, RadioButton, Button, Paragraph, Dialog, Portal , TouchableRipple,TextInput} from 'react-native-paper';
import styles from './styles';
import { getAllUsersTracks, getUsersTracksInPlaylist, getUsersTracksPerPreference } from "./spotify_functions"

export default function Config(){
  [visible, setVisible]=useState(true);
  [radioValue, setRadioValue]=useState('first');
  [title,setTitle]=useState('');
  // const showDialog = () => {getUsersTracksPerPreference(['electronic', 'dance', 'pop'])}; // Testing getAllUsersTracks;
  const showDialog = () => {setVisible(true)};
  const hideDialog = () => {setVisible(false)};

  return (
      <View>
        <Button style={styles.plusButton} icon="plus" mode="contained" onPress={showDialog}>Generate Playlist</Button>
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
                  <TextInput label='Title' mode="outlined" style={{paddingVertical: 10}}
                  value={title} onChangeText={title => setTitle({title})} />


                  <RadioButton.Group
                    value={radioValue}
                    onValueChange={(value) => setRadioValue(value)}
                  >


                  <View style={styles.row}>
                    <Text>Work out</Text>
                    <RadioButton style={{backgroundColor: '#f5f5f5'}} value="first" color='#5000b8' />
                  </View>

                  <View style={styles.row}>
                    <Text>Relax</Text>
                    <RadioButton value="second" color='#5000b8'/>
                  </View>

                  <View style={styles.row}>
                    <Text>Party</Text>
                    <RadioButton value="third" color='#5000b8' />
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

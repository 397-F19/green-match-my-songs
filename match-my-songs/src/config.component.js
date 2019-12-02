import React, { useState } from "react";
import { View, ScrollView } from 'react-native';
import { Text, Divider, RadioButton, Button, Paragraph, Dialog, Portal, TextInput} from 'react-native-paper';
import styles from './styles';
import { getAllUsersTracks, getUsersTracksPerPreference } from "./spotify_functions"

export default function Config({ token, handleSongs }) {
  [visible, setVisible]=useState(true);
  [radioValue, setRadioValue]=useState('first');
  [title,setTitle]=useState('');
  [genrePreference,setGenrePreference]=useState('');
  // const showDialog = () => {getUsersTracksPerPreference(['electronic', 'dance', 'pop'])}; // Testing getAllUsersTracks;
  const showDialog = () => {setVisible(true)};
  const hideDialog = () => {setVisible(false)};

  const genres = [
  {
    value: 'first',
    label: 'pop',
  },
  {
    value: 'second',
    label: 'rock',
  },
  {
    value: 'third',
    label: 'rap',
  },
  {
    value: 'fourth',
    label: 'latin',
  },
  {
    value: 'fifth',
    label: 'tropical',
  },
  ]

  const getSongsCloseDialog = async () => {
    setVisible(false);
    tracks = await getAllUsersTracks(token);
    playlistId = "37i9dQZF1DXeapRjZhqZ07"
    prefTracks = await getUsersTracksPerPreference([genrePreference], token);
    //console.log(tracks)
    //console.log('preference')
    //console.log(prefTracks)
    if(prefTracks.length===0) alert('none found')
    handleSongs(prefTracks);
  }

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
                    onValueChange={ value => 
                      {setRadioValue(value); 
                        let obj=genres.find( genre => genre.value === value);
                        setGenrePreference(obj.label);
                        //console.log(obj.label);
                        //console.log(genrePreference);
                        //console.log(genres.find( genre => genre.value === value));
                        
                        getSongsCloseDialog;
                      } }
                  >
                  {genres.map (genre =>   
                    <View style={styles.row} key={genre.value}>
                      <Text>{genre.label}</Text>
                    <RadioButton value={genre.value} color='#5000b8' />
                    </View>
                  
                  )
                }
                  </RadioButton.Group>
                  </View>
                </ScrollView>
              </Dialog.ScrollArea>
            <Dialog.Actions>
              <Button onPress={getSongsCloseDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
      );
}

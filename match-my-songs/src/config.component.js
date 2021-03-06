import React, { useState, useContext } from "react";
import { View, ScrollView } from 'react-native';
import { Text, Divider, RadioButton, Button, Paragraph, Dialog, Portal, TextInput} from 'react-native-paper';
import { Songcontext } from './context'
import styles from './styles';
import { getAllUsersTracks, getUsersTracksPerPreference } from "./spotify_functions"

export default function Config({ token, handleSongs, visible, setVisible }) {
  const [radioValue, setRadioValue] = useState('first');
  const [genrePreference, setGenrePreference] = useState('');
  const [title, setTitle] = useContext(Songcontext)


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
    if(prefTracks.length===0) {alert("Nothing found. Let's match again!");setVisible(true);}
    handleSongs(prefTracks);
  }

  return (
      <View>
        <Portal>
          <Dialog
             visible={visible}
             onDismiss={() => setVisible(false)}>
            <Dialog.Title>Playlist generator for genres you like</Dialog.Title>
              <Dialog.ScrollArea style={{ maxHeight: 500}}>
                <ScrollView>
                  <Paragraph style={{paddingVertical: 10}}>
                  Select the genre you like and get a playlist generated with one tap</Paragraph>
                  <Divider />

                  <View style={styles.radioContainer}>
                  <TextInput label='Title' mode="outlined" style={{paddingVertical: 10}}
                  value={title} onChangeText={value => setTitle(value)} />

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

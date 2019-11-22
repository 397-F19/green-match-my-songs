import { shuffle } from './utils';



// Spotify auth setup
// TODO remove this and automate
// FIXME: These are meant to be removed.
var client_id = 'b1bcbd4ae171494db0dbd3a736535946'; // Your client id
var client_secret = '27127362e5174286a15516cc33a96998'; // Your secret
// var redirect_uri = 'http://www.google.com'; // Your redirect urib
// eslint-disable-next-line no-unused-vars
var user_id = 'p7x48c95ztmvh1ry6umg0h82f'
var SpotifyWebApi = require('spotify-web-api-node');
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
  redirectUri: 'http://www.google.com'
});

const hardCodedToken = 'BQB8bwC-aduGTn2c9jMm1wtSG6wTKP6DdnVwKUcSfr7DM1LqoDI1rkRBa8iGYamr16JFRxmK5COcnXe6RSMRiaChry5eUc6qPUeGzF7Hmhc0lFZeEWK-AudBvYWDqWFK2XmGEolKigew-80qNr3TSr4H_jabMx2nqoF5z2isOYXx4viJJfYkptrK_PojrcHnmTWh';
spotifyApi.setAccessToken(hardCodedToken);


// TODO: Recursively call the apis to get all tracks.

export async function getAllUsersTracksHelper(offset, lastNumTracks, tracks) {
  console.log('lastNumTracks', lastNumTracks);
  console.log('There are', tracks.length, ' songs');
  if (lastNumTracks && lastNumTracks < 50) {
    console.log('Finished! There are', tracks.length, ' songs');
    return tracks;
  }
  return spotifyApi.getMySavedTracks({
    limit: 50,
    offset: offset,
  })
  .then(function(data) {
    tracks = tracks.concat(data.body.items);
    console.log('num tracks', tracks.length);
    return getAllUsersTracksHelper(offset + 50,
      data.body.items.length, tracks).then(function(_tracks) {
        return _tracks;
      });
  });
}

export async function getAllUsersTracks(token) {
  spotifyApi.setAccessToken(token);
  return getAllUsersTracksHelper(0, null, []).then(function(tracks) {
    return tracks;
  });
}

export async function getAllUsersTracksOld() {
  console.log('Getting all users songs');
  spotifyApi.getMySavedTracks({
    limit : 50,
    offset: 1
  })
  .then(function(data) {
    console.log("getAllUsersTracks -> " + data.body.items.length + " tracks grabbed")
    return data.body.items;
  }, function(err) {
    console.log('Something went wrong!', err);
  });
}

export async function getUsersTracksInPlaylist (playlistId, token) {
  spotifyApi.setAccessToken(token);
  const endpoint = "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks";
  // const authToken = hardCodedToken;
  return await fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: "Bearer " + token,
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("getUsersTracksInPlaylist -> " + data.items.length + " tracks grabbed")
    return data.items;
  });


};

export async function getUsersTracksPerPreference(preferredGenres, token) {
  spotifyApi.setAccessToken(token);
  preferredGenres = new Set(preferredGenres);
  let allTracks = await getAllUsersTracks(token);
  console.log(allTracks.length);
  allTracks = shuffle(allTracks);
  let preferredTracks = [];

  let i = 0;
  while (preferredTracks.length < 10 && i < allTracks.length) {
    if (!allTracks[i]) {
      i += 1;
      continue;
    }
    const track = allTracks[i]['track'];
    if (!track['artists']) {
      console.log(allTracks[i]);
      i += 1;
      continue;
    }
    if (!track['artists'][0]) {
      console.log(allTracks[i]['artists']);
      i += 1;
      continue;
    }
    const artistId = track['artists'][0]['id'];
    i += 1;
    const artistInfo = await spotifyApi.getArtist(artistId);
    console.log(artistInfo);
    const genres = artistInfo['body']['genres'];
    console.log(genres);
    for (let j = 0; j < genres.length; j += 1) {
      if (preferredGenres.has(genres[j])) {
        preferredTracks.push(allTracks[i]);
        break;
      }
    }
  }
  console.log(preferredTracks.length);
  return preferredTracks;
};

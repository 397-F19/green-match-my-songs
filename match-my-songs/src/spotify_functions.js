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

const hardCodedToken = 'BQBEp6cXkxHVhvlsI3oi9bnVBrmr4NdtrX63N4WnMJtvSv1vwMM7eIoY5C0CFQkiwZCJONyvvBzdS09cvQ86TYz2fF8D_2PT95wCHubCIOqqK3ZKaVkXOKZnE7DSrsDI4-BZhyII60H1dzbOB-OB8kpJkZLXQuCKpVnUyJMEwkoa4BzBqxCC8MSx0-g';
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

export async function getAllUsersTracks() {
  return getAllUsersTracksHelper(0, null, []).then(function(tracks) {
    return tracks;
  });
}

export async function getUsersTracksPerPreference(preferredGenres) {
  preferredGenres = new Set(preferredGenres);
  let allTracks = await getAllUsersTracks();
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

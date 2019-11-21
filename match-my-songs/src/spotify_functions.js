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

const token = 'BQB-kV0H0DlxglvdtZ8BorpjfVKqLjZTqC_r5U1tnuCgx0nzCxN3ZHnfiqhjYxOcgnpsUC0UB2mrvlty7eJ7zlsSa3KBOLzH2eVXMXglMNPD8oTVVWXKJB93VFdDZCFOUdpsdy5es5Z_ipz7wUfT0waDjKGNwzRl3wCZIv6wvR_aH0mejRjnOy6hKUM';
spotifyApi.setAccessToken(token);


// TODO: Recursively call the apis to get all tracks.

export async function getAllUsersTracksHelper(offset, lastNumTracks, tracks) {
  console.log('There are', tracks.length, ' songs');
  if (lastNumTracks && lastNumTracks < 50) {
    console.log('There are', tracks.length, ' songs');
    return tracks;
  }
  spotifyApi.getMySavedTracks({
    limit: 50,
    offset: offset,
  })
  .then(function(data) {
    tracks = tracks.concat(data.body.items);
    return getAllUsersTracksHelper(offset + 50, data.body.items.length, tracks);
  });
}

export async function getAllUsersTracks() {
  getAllUsersTracksHelper(0, null, []).then(function(tracks) {
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

export async function getUsersTracksInPlaylist (playlistId) {
  const endpoint = "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks";
  const authToken = "BQDfbRn5H3GzjQ7TMH-r32UZbnweRRgNgi6f5wpdgxYNJLmooadcPsuU1qoVQmJ-JqPGeCXEMBP33N6bo5EDc9USer97R1Ne1apvabr5H0_AkqNhadhvhyOaS7_tK6YShJHUM7rqbS5a0GbcL9pzmRX5taHhxMjhmWvZPlCPYIXhYIz6rx6K4SPPTwVbNZ0KFX6i"
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

const getUsersTracksPerPreference = (userId, preferredGenres) => {

};

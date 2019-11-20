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

const token = "BQCoh1zjzCNI6GTzRt-WvSPjaERGjocd443u8sYtBDcJ_G5Nlsj2YG4RBMd_WyqLzTxoAk2xZXt_KJo7uZGxT_tZ_SOUcbXW6d747qUEsprPwTGpZ_r_Ka6eux1zYWD0bhLyhuTBjX6o-jgUCFuthC1gCOtGugmXEKyb9FeCMz_f3bmoIUaBx7K4xY7peaOTLr0z"
spotifyApi.setAccessToken(token);


export function getAllUsersTracks() {
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

export async function getUsersTracksInPlaylist (playlist_id) {
  const endpoint = "https://api.spotify.com/v1/playlists/" + playlist_id + "/tracks";
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

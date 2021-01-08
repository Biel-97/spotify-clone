import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import Page from './components/page'
import { getTokenFromResponse } from './spotify'
import spotifyWeb from 'spotify-web-api-js'
import dotenv from 'dotenv/config'

import { useStateValue } from './DataProvider'
import {ACTION} from './reducer'

const playlistUser = process.env.REACT_APP_PLAYLIST_USER
const spotify = new spotifyWeb()
function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: ACTION.SET_TOKEN,
        token: _token,
      });

      spotify.getPlaylist(playlistUser).then((response) =>
        dispatch({
          type: ACTION.SET_DISCOVER_WEEKLY,
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: ACTION.SET_TOP_ARTISTS,
          top_artists: response,
        })
      );



      spotify.getMe().then((user) => {
        dispatch({
          type: ACTION.SET_USER,
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: ACTION.SET_PLAYLIS,
          playlists: playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
      <div className="App">
        {token ? <Page spotify={spotify}/> : <Login />}

      </div>
  );
}

export default App;


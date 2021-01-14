import React, { useEffect, useState } from 'react'
import { setRandomColor } from './components/utils'

import './App.css'
import Login from './components/Login'
import Page from './components/page'
import { getTokenFromResponse } from './spotify'
import spotifyWeb from 'spotify-web-api-js'
import dotenv from 'dotenv/config'

import { useStateValue } from './DataProvider'
import { ACTION } from './reducer'
import Display from './components/display'

const playlistUser = process.env.REACT_APP_PLAYLIST_USER
const spotify = new spotifyWeb()
function App() {
  const [{ token, Next_playlist, discover_weekly, Recently_Played }, dispatch] = useStateValue();

  useEffect(() => {
    const display = document.querySelector('.display')
    const displayBody = document.querySelector('.display-body')

    const color = setRandomColor()
    if (Next_playlist !== '' && display !== null) {

      display.style.background = `linear-gradient(180deg, rgb(${color})  0%, rgb(18,18,18) 69%)`
      displayBody.style.background = `linear-gradient(180deg, rgba(${color}, 0.1)  0%, rgb(18,18,18) 69%)`
      
      spotify.getPlaylist(Next_playlist.id).then((response) => {
        dispatch({
          type: ACTION.SET_CURRENT_PLAYLIST,
          Set_Current_PlayList: response,
        })
      })
      if (Next_playlist.name == discover_weekly.name && display !== null) {
        display.style.background = `linear-gradient(180deg, rgb(236, 142, 181)  0%, rgb(18,18,18) 69%)`
        displayBody.style.background = `linear-gradient(180deg, rgb(73, 48, 59) 0%, rgba(18,18,18,1) 8%)`
      }

    } else {
      spotify.getPlaylist(playlistUser).then((response) => {

        dispatch({
          type: ACTION.SET_DISCOVER_WEEKLY,
          discover_weekly: response,
        })
      })

    }

  }, [Next_playlist])

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

      spotify.getMyTopArtists().then((response) =>{
      // console.log(response)
        dispatch({
          type: ACTION.SET_TOP_ARTISTS,
          top_artists: response,
        })
      }
      );



      spotify.getMe().then((user) => {
        dispatch({
          type: ACTION.SET_USER,
          user,
        });
      });

      spotify.getUserPlaylists().then((response) => {
        dispatch({
          type: ACTION.SET_PLAYLISTS,
          playlists: response,
        });
      });

      spotify.getMyRecentlyPlayedTracks({
        limit : 20,
        offset: 1
      })
      .then((response) => {
        dispatch({
          type: ACTION.RECENTLY_PLAYED,
          Recently_Played: response,
        });
      });
    }
  }, [token]);

  return (
    <div className="App">
      {token ? <Page /> : <Login />}

    </div>
  );
}

export default App;


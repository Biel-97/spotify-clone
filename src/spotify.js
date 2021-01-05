require('dotenv').config()
export const authEndpoint = 'https://accounts.spotify.com/authorize'

const redirectUrl = process.env.REACT_APP_REDIRECT_URL 

const ID = process.env.REACT_APP_ID

const scopos = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
]

export const getTokenFromResponse = () => {

    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])
  
        return initial
      }, {})
  }

export const LoguinUrl = `${authEndpoint}?client_id=${ID}&redirect_uri=${redirectUrl}&scope=${scopos.join('%20')}&response_type=token&show_dialog=true`
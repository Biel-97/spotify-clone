import React, { useEffect, useState } from 'react'
import Loguin from './components/Loguin'
import { getTokenFromResponse } from './spotify'
import spotifyWeb from 'spotify-web-api-js'

const spotify = new spotifyWeb()

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = getTokenFromResponse().access_token
    window.location.hash = ''

    if(token){
      setToken(token)
      spotify.setAccessToken(token)
      spotify.getMe().then(user => {
        console.log(user)
      })
    }
  }, [])


  return (
    <div className="App">
      <h1>Tesste</h1>
      {token? <h1>Tudo certo!!</h1>: <Loguin/>}
    </div>
  );
}

export default App;

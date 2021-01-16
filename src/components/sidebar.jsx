import React, { useState, useEffect } from 'react'
import SideElement from './SideElements'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { useStateValue } from "../DataProvider";

function Login() {
    const [{ playlists, Next_playlist, discover_weekly }, dispatch] = useStateValue();
    const [playlist_state, set_playlist_state] = useState('')

    useEffect(() => {
        if (playlists != null || playlists !== undefined) {
            set_playlist_state(playlists)
        }

    }, [playlists, discover_weekly])



    function setNext(element) {
        // console.log(element)
        dispatch({
            type: "NEXT_PLAYLIST",
            Next_playlist: element
        })
    }

    function render_playlist(params) {
        let cont = 0
        let element = []
        if (params !== undefined && params !== '') {
            params.items.map((e) => {

                element.push(<i key={e.id} onClick={() => setNext(e)}> <SideElement text={e.name} /> </i>)
                cont++
            })
            if (discover_weekly) {
                element.push(<i key={discover_weekly.id} onClick={() => setNext(discover_weekly)}> <SideElement text={discover_weekly.name} /> </i>)
            }
        }
        return element
    }
    return (
        <div className="sideBar">
            <h1 className="side-icon">
                <a href={process.env.REACT_APP_REDIRECT_URL}>

                    <FontAwesomeIcon icon={faSpotify} />
                    <span>Spotify</span>
                </a>
            </h1>
            <div className="side-header">
                <SideElement text={'Home'} Icon={<FontAwesomeIcon icon={faHome} />}></SideElement>
            </div>

            <br />
            <span>PLAYLIST&nbsp;</span>
            {render_playlist(playlist_state)}

        </div>
    )
}

export default Login
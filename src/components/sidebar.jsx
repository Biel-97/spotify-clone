import React, { useState, useEffect } from 'react'
import SideElement from './SideElements'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faStream } from '@fortawesome/free-solid-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { useStateValue } from "../DataProvider";

function Login() {
    const [{ playlists, Next_playlist, discover_weekly}, dispatch] = useStateValue();
    const [playlist_state, set_playlist_state] = useState('')

    useEffect(() => {
        if (playlists != null || playlists !== undefined) {
            set_playlist_state(playlists)
            // console.log(playlists)
        }

    }, [playlists])



    function setNext(element){
        dispatch({
            type: "NEXT_PLAYLIST",
            Next_playlist: element
        })
        // console.log(element)
        // console.log(Next_playlist)
    }

    function render_playlist(params) {
        let cont = 0
        let element = []
        if (params !== undefined && params !== '') {
            params.items.map((e) => {
                element.push( <i key={e.id} onClick={() => setNext(e)}> <SideElement text={e.name}  /> </i>)
                
                cont ++
            })
        }
        return element
    }
    return (
        <div className="sideBar">
            <h1 className="side-icon">
                <FontAwesomeIcon icon={faSpotify} />
                <span>Spotify</span>
            </h1>
            <div className="side-header">
                <SideElement text={'Inicio'} Icon={<FontAwesomeIcon icon={faHome} />}></SideElement>
                <SideElement text={'Pesquisa'} Icon={<FontAwesomeIcon icon={faSearch} />}></SideElement>
                <SideElement text={'Sua biblioteca'} Icon={<FontAwesomeIcon icon={faStream} />}></SideElement>

            </div>

            <br />
            <span>PLAYLIST&nbsp;({playlist_state.total})</span>
            {render_playlist(playlist_state)}

        </div>
    )
}

export default Login
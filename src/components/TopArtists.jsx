import React, { useEffect, useState } from 'react'
import './TopArtists.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import { useStateValue } from '../DataProvider'

function TopArtists() {
    const [{ top_artists }, dispatch] = useStateValue();
    const [topartists, SetTopArtists] = useState()
    useEffect(() => {
        let list = []
        if (top_artists !== null) {

            top_artists.items.forEach(element => {

                list.push(
                    <div className="artists-Card">
                        <i >
                            <img src={element.images[1].url} alt="" />
                            <span className="play-button-card">
                                <FontAwesomeIcon icon={faPlay} />
                            </span>
                        </i>
                        <p>{element.name}</p>
                        <span>{element.genres[0]}</span>
                        <a onMouseOut={e => setColorOut(e)} onMouseEnter={e => setColorEnter(e)} className="card-link" href={element.external_urls.spotify}></a>
                    </div>
                )

            })
            SetTopArtists(list)
        }
    }, [top_artists])

    function setColorEnter(e) {
        const playButton = e.target.closest('.artists-Card').firstChild.lastChild.childNodes[0]

        e.target.closest(".card-link").style.background = 'rgba(255, 255, 255, 0.1)'

        playButton.parentNode.style.opacity = '1'
        playButton.parentNode.style.transition = '200ms ease-in'

        playButton.parentNode.style.bottom = '10px'


    }
    function setColorOut(e) {
        const playButton = e.target.closest('.artists-Card').firstChild.lastChild.childNodes[0]
        e.target.closest(".card-link").style.background = 'transparent'

        playButton.parentNode.style.transition = '200ms ease-in'
        playButton.parentNode.style.opacity = '0'
        playButton.parentNode.style.bottom = '0px'
    }
    return (
        <div className="topArtists">
            <h1>Top Artists</h1>
            <div className="artistsCards">
                {topartists}
            </div>
        </div>
    )
}

export default TopArtists

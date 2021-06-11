import React, { useEffect, useState } from 'react'
import './Recently.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import { useStateValue } from "../DataProvider";

function Recently() {
    const [{ Recently_Played, top_artists }, dispatch] = useStateValue();
    const [albumCard, SetAlbumCard] = useState();

    function getKey() {
        setTimeout(() => {
            return Date.now()
        }, 10)
    }


    useEffect(() => {

        if (Recently_Played !== null) {
            let albuns = []
            let albuns_sam = []
            let albuns_diff = []
            Recently_Played.items.map((e) => {
                albuns.filter(element => {
                    if (element.album !== e.track.album.name) {
                        return e.track.album.name
                    } else {
                        albuns_sam.push({
                            album: e.track.album.name,
                            albumIMG: e.track.album.images[1].url,
                            albumURL: e.track.album.external_urls.spotify,
                            artists: e.track.album.artists
                        })
                    }
                })

                albuns.push({
                    album: e.track.album.name,
                    albumIMG: e.track.album.images[1].url,
                    albumURL: e.track.album.external_urls.spotify,
                    artists: e.track.album.artists
                })
            })
            albuns.filter(e => {
                if (e.album !== albuns_sam[0].album) {
                    albuns_diff.push(e)
                }
            })
            albuns_diff.push(albuns_sam[0])
            if(albuns_diff.length > 1){
                SetAlbumCard(albuns_diff)
            }
        }
    }, [Recently_Played])


    function renderAlbumCard(params) {
        let card = []
        let artists = []
        if (params) {
            params.forEach((e) => {

                card.push(
                    <div key={e.album || getKey()} className="album-card">
                        <i className="album-button-play">
                            <img src={e.albumIMG} alt="" />
                            <span className='play-button-card'>
                                <FontAwesomeIcon icon={faPlay} />

                            </span>
                        </i>
                        <span >{e.album}</span >
                        {e.artists.forEach(element => {

                            artists.push(<a href={element.external_urls.spotify} key={element.id}>{element.name} <i>,</i></a>)
                        })}
                        <div className="album-artists">{artists}</div>
                        <a onMouseOut={e => setColorOut(e)} onMouseEnter={e => setColorEnter(e)} className="card-link" href={e.albumURL}></a>
                    </div>)
                artists = []
            })
        }
        return card
    }
    function setColorEnter(e) {
        const playButton = e.target.closest('.album-card').firstChild.lastChild.childNodes[0]
        e.target.closest(".card-link").style.background = 'rgba(255, 255, 255, 0.1)'

        playButton.parentNode.style.opacity = '1'
        playButton.parentNode.style.transition = '200ms ease-in'

        playButton.parentNode.style.bottom = '10px'



    }
    function setColorOut(e) {
        const playButton = e.target.closest('.album-card').firstChild.lastChild.childNodes[0]
        e.target.closest(".card-link").style.background = 'transparent'

        playButton.parentNode.style.transition = '200ms ease-in'
        playButton.parentNode.style.opacity = '0'
        playButton.parentNode.style.bottom = '0px'
    }
    return (
        <div className="Recently">
            <h1>Albums Recently Played</h1>
            <div className="Recently-cards">
                {renderAlbumCard(albumCard)}

            </div>
        </div>
    )
}

export default Recently

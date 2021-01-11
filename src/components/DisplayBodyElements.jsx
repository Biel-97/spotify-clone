import React, { useEffect, useState } from 'react'
import './DisplayBodyElement.css'
import { useStateValue } from "../DataProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlayCircle, faClock, faPlay } from '@fortawesome/free-solid-svg-icons'
import { GoToAlbum, GoToArtists, timeTransform, GoToMusic } from './utils'


function DisplayBodyElements() {
    const [{ discover_weekly, track, Next_playlist }, dispatch] = useStateValue();
    let cont = 0

    const getMusic = (opt) => {
        dispatch({
            type: "SET_TRACK",
            track: opt
        })
    }

    useEffect(() => {
        // dispatch({
        //     type: "SET_TRACK",
        //     track: opt
        // })
        console.log(discover_weekly)
    }, [])
    return (
        <>
            <div style={{ width: "100%" }} >
                <div className="pre-title">
                    <span className="play">
                        <FontAwesomeIcon icon={faPlayCircle} />
                    </span>
                    <span className="heart">
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                    <span className="dots">.&nbsp;.&nbsp;. </span>
                </div>
                <div className="title">

                    <span className="hash"><span>#</span> TÍTULO</span>
                    <span className="title-music album">ÁLBUM</span>
                    <span className="added_at"> ADICIONADO EM:</span>
                    <span className="span-time"><FontAwesomeIcon icon={faClock} /></span>
                </div>

                {discover_weekly?.tracks.items.map((e) => {
                    cont++
                    return <div className="music-card" key={e.track.id} onDoubleClick={() => getMusic({
                        nome: e.track.name,
                        albumName: e.track.album,
                        albumImage: e.track.album.images[2].url,
                        preview: e.track.preview_url,
                        artists: e.track.artists
                    })}>
                        <div className="title-music">
                            <span className="play-card">
                                <button onClick={() => getMusic({
                                    nome: e.track.name,
                                    albumName: e.track.album,
                                    albumImage: e.track.album.images[2].url,
                                    preview: e.track.preview_url,
                                    artists: e.track.artists
                                })}><FontAwesomeIcon icon={faPlay} /></button>
                            </span>
                            <img src={e.track.album.images[2].url} alt="" />
                            <div>
                                <p>{GoToMusic(e.track)}</p>
                                <span>{GoToArtists(e.track.artists)}</span>
                            </div>
                        </div>
                        <span className="title-music album">{GoToAlbum(e.track.album)}</span>
                        <span className="added_at" >{e.added_at.substring(0, 10)}</span>
                        <span className="timer">{timeTransform(e.track.duration_ms)}</span>
                    </div>
                })}

            </div>
        </>
    )
}

export default DisplayBodyElements
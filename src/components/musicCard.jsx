import React, { useEffect, useState } from 'react'

import { useStateValue } from "../DataProvider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faSkull } from '@fortawesome/free-solid-svg-icons'

import { GoToAlbum, GoToArtists, timeTransform, GoToMusic, lastUpdate } from './utils'

function MusicCard() {
    const [{ discover_weekly, Set_Current_PlayList }, dispatch] = useStateValue();
    const [list, SetList] = useState(discover_weekly)



    useEffect(() => {
        if (!Set_Current_PlayList) {
            SetList(discover_weekly)

        } else {
            SetList(Set_Current_PlayList)

        }

    }, [Set_Current_PlayList, discover_weekly])

    const getMusic = (opt) => {
        if (opt.preview !== null) {
            dispatch({
                type: "SET_TRACK",
                track: opt
            })
        }
    }
    const setCard = (e) => {
        // document.querySelectorAll('.music-card').style.background = 'transparent'
        document.querySelectorAll('.music-card').forEach((e) => {
            e.style.background = 'transparent'
        })
        e.target.closest(".music-card").style.background = 'rgba(255, 255, 255, 0.1)'
    }



    return (
        <div>
            {list?.tracks.items.map((e) => {
                if (e.track.preview_url) {

                    return <div className="music-card" key={e.track.id} onClick={e => setCard(e)} onDoubleClick={() => getMusic({
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
                        <span className="added_at" >{lastUpdate(e.added_at)} days ago</span>
                        <span className="timer">{timeTransform(e.track.duration_ms)}</span>
                    </div>
                } else {
                    return <div className="music-card" key={e.track.id} onClick={e => setCard(e)} >
                        <div className="title-music">
                            <span className="play-card">
                            <button><FontAwesomeIcon icon={faSkull} /></button>
                            </span>
                            <img src={e.track.album.images[2].url} alt="" />
                            <div>
                                <p>{GoToMusic(e.track)}</p>
                                <span>{GoToArtists(e.track.artists)}</span>
                            </div>
                        </div>
                        <span className="title-music album">{GoToAlbum(e.track.album)}</span>
                        <span className="added_at" >{lastUpdate(e.added_at)} days ago</span>
                        <span className="timer">{timeTransform(e.track.duration_ms)}</span>
                    </div>
                }
            })}

        </div>
    )
}

export default MusicCard

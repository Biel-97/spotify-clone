import React from 'react'
import MusicCard from './musicCard'
import './DisplayBodyElement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlayCircle, faClock } from '@fortawesome/free-solid-svg-icons'


function DisplayBodyElements() {

    return (
        <>
            <div className="music-list" >
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
                    <span className="added_at">DATA ADICIONADA</span>
                    <span className="span-time"><FontAwesomeIcon icon={faClock} /></span>
                </div>
                <MusicCard/>
            </div>
        </>
    )
}

export default DisplayBodyElements
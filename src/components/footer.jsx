import React, { useEffect, useState, useRef } from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons'

import { GoToAlbum, GoToArtists, timeTransform, GoToMusic } from './utils'

import { useStateValue } from "../DataProvider";

const setbuttonToStop = () => {
    let startButton = document.querySelector('.start')
    startButton.style.display = 'none'

    let pauseButton = document.querySelector('.pause')
    pauseButton.style.display = 'inline-block'
}


function Footer() {

    const audioPlayer = useRef();

    const [{ track }, dispatch] = useStateValue();
    const [audioInfo, setAudioInfo] = useState(0)
    const [playPromise, setplayPromise] = useState()

useEffect(() => {
    startTrack()
    setbuttonToStop()

}, [track])


    const backstep = () => {
        audioPlayer.current.load()
        audioPlayer.current.play()
    }


    const startTrack = (e) => {

        setbuttonToStop()
        audioPlayer.current.volume = 0.3
        setplayPromise(audioPlayer.current.play())

        if (!audioPlayer) {
            console.log('?')
        }
        // console.log(audioPlayer.current.played.end(0))
    }




    const pauseTrack = (e) => {
        if (playPromise !== undefined) {
            let startButton = document.querySelector('.start')
            startButton.style.display = 'inline-block'

            let pauseButton = document.querySelector('.pause')
            pauseButton.style.display = 'none'
            playPromise
                .then(() => audioPlayer.current.pause())
                .catch(error => console.log(error));
        }
    }

    const callNext = (e) => {
        console.log(e)
    }

    return (
        <div className="footer">
            <div className="card-icon-info">


                <img src={track.albumImage} alt="" />

                <div className="card-music-info">
                    {track.albumName ? (GoToAlbum(track.albumName)) : ''}
                    <span>
                        {track.albumName ? (GoToArtists(track.artists)) : ''}

                    </span>
                </div>


            </div>
            <div className="controls">
                <audio src={track.preview} ref={audioPlayer}><p>Seu nevegador não suporta o elemento audio</p></audio>
                {/* <span className="cont-timer">0:{audioInfo}</span> */}

                {/* <button onClick={() => backstep()}><FontAwesomeIcon icon={faStepBackward} /></button> */}

                <button className="start" onClick={(e) => startTrack(e)}><FontAwesomeIcon icon={faPlayCircle} /></button>
                <button className="pause" onClick={(e) => pauseTrack(e)}><FontAwesomeIcon icon={faPauseCircle} /></button>

                {/* <button onClick={(e) => callNext()}><FontAwesomeIcon icon={faStepForward} /></button> */}

                {/* <span className="max-timer">0:30</span> */}
            </div>
        </div>
    )
}

export default Footer

import React, { useEffect, useState, useRef } from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

import { GoToAlbum, GoToArtists } from './utils'

import { useStateValue } from "../DataProvider";





function Footer() {
    
    const [{ track }, dispatch] = useStateValue();
    const [currentTime, setcurrentTime] = useState('0')
    const [playPromise, setplayPromise] = useState()

    const audioPlayer = useRef();
    const playButton = useRef();
    const StopButton = useRef();

    const changeButton = function (a) {
        if (a) {
            playButton.current.style.display = 'none'
            StopButton.current.style.display = 'inline-block'
        } else {
            playButton.current.style.display = 'inline-block'
            StopButton.current.style.display = 'none'
        }
    }



    useEffect(() => {
        setInterval(function () {
            let ms = audioPlayer.current.currentTime
            setcurrentTime(parseFloat(ms).toFixed(0))
            if (ms >= 29.9) { changeButton(1) }
        }, 1000)
    }, [])

    useEffect(() => {
        if (track !== null && track !== '') {
            startTrack()
        }
    }, [track])


    const backstep = () => {
        audioPlayer.current.load()
        audioPlayer.current.play()
    }


    const startTrack = (e) => {
        if (track !== null && track !== '') {
            changeButton(1)
            audioPlayer.current.volume = 0.3
            setplayPromise(audioPlayer.current.play())
        }
    }




    const pauseTrack = (e) => {
        if (playPromise !== undefined) {
            let startButton = document.querySelector('.start')
            startButton.style.display = 'inline-block'

            let pauseButton = document.querySelector('.pause')
            pauseButton.style.display = 'none'
            playPromise
                .then(() => audioPlayer.current.pause())
                .catch(error => console.error(error));
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
                <audio src={track.preview} ref={audioPlayer}
                ><p>Seu nevegador não suporta o elemento audio</p></audio>
                <span className="cont-timer">0:{currentTime}</span>

                {/* <button onClick={() => backstep()}><FontAwesomeIcon icon={faStepBackward} /></button> */}

                <button className="pause" ref={StopButton} onClick={(e) => pauseTrack(e)}><FontAwesomeIcon icon={faPauseCircle} /></button>
                <button className="start" ref={playButton} onClick={(e) => startTrack(e)}><FontAwesomeIcon icon={faPlayCircle} /></button>

                {/* <button onClick={(e) => callNext()}><FontAwesomeIcon icon={faStepForward} /></button> */}

                <span className="max-timer">0:30</span>
            </div>
        </div>
    )
}

export default Footer

import React, { useEffect, useState, useRef } from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle, faVolumeDown, faVolumeUp, faVolumeMute, faVolumeOff } from '@fortawesome/free-solid-svg-icons'

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
            if (audioPlayer !== null) {
                setcurrentTime(parseFloat(audioPlayer.current.currentTime).toFixed(0))
                if (audioPlayer.current.currentTime >= 29.9) { changeButton(true) }
            } if (audioPlayer == null) {
                console.log('erro')
                console.log(audioPlayer)
            }
            document.querySelector('.slider').value = parseFloat(audioPlayer.current.currentTime).toFixed(0)
        }, 1000)
        document.querySelector('.vol-slider').value = '20'
        audioPlayer.current.volume = (document.querySelector('.vol-slider').value / 100)
    }, [])

    useEffect(() => {
        if (track !== null && track !== '') {
            audioPlayer.current.currentTime = 0
            startTrack()
        }
    }, [track])

    const startTrack = (e) => {
        if (track !== null && track !== '') {
            changeButton(true)
            audioPlayer.current.volume = document.querySelector('.vol-slider').value / 100
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


    function setRangeMusic(e) {
        audioPlayer.current.currentTime = e.target.value
        setcurrentTime(e.target.value)
    }
    function setVolume(e) {
        audioPlayer.current.volume = (e.target.value / 100)
        const muteVolume = document.querySelector('.mute-volume')
        const offVolume = document.querySelector('.off-volume')
        const downVolume = document.querySelector('.down-volume')
        const upVolume = document.querySelector('.up-volume')
        if((e.target.value / 100) == 0){
            muteVolume.style.display = 'block'
            offVolume.style.display = 'none'
            downVolume.style.display = 'none'
            upVolume.style.display = 'none'

        }if((e.target.value / 100) > 0.01  && (e.target.value / 100) < 0.3){
            offVolume.style.display = 'block'
            muteVolume.style.display = 'none'
            downVolume.style.display = 'none'
            upVolume.style.display = 'none'
        }if((e.target.value / 100) > 0.31  && (e.target.value / 100) < 0.65){
            downVolume.style.display = 'block'
            offVolume.style.display = 'none'
            muteVolume.style.display = 'none'
            upVolume.style.display = 'none'

        }if((e.target.value / 100) > 0.66  && (e.target.value / 100) < 1){
            upVolume.style.display = 'block'
            muteVolume.style.display = 'none'
            offVolume.style.display = 'none'
            downVolume.style.display = 'none'
        }
    }
    return (
        <footer className="footer">
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

                <div className="buttons">
                    <button className="pause" ref={StopButton} onClick={(e) => pauseTrack(e)}><FontAwesomeIcon icon={faPauseCircle} /></button>
                    <button className="start" ref={playButton} onClick={(e) => startTrack(e)}><FontAwesomeIcon icon={faPlayCircle} /></button>

                </div>
                <div className="slidecontainer">

                    <span className="cont-timer">{currentTime}</span>
                    <input onChange={e => setRangeMusic(e)} type="range" min="0" max="30" step="1" className="slider" />
                    <span className="max-timer">0:30</span>
                </div>
            </div>
            <div className="volume">
                <span >
                    <span className="mute-volume"><FontAwesomeIcon icon={faVolumeMute} /></span>
                    <span className="off-volume"><FontAwesomeIcon icon={faVolumeOff} /></span>
                    <span className="down-volume"><FontAwesomeIcon icon={faVolumeDown} /></span>
                    <span className="up-volume"><FontAwesomeIcon icon={faVolumeUp} /></span>
                </span>

                <input onChange={e => setVolume(e)} className="slider vol-slider" type="range" min="0" max="100" step="1" />
            </div>
        </footer>
    )
}

export default Footer

import React from 'react'
import './login.css'
import { LoginUrl } from '../spotify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSpotify, faLinkedin, faCodepen, faGithub} from '@fortawesome/free-brands-svg-icons'

function Login() {
    return (
        <div className="login-page">
            <div className="spotify-line">
                <h1 className="spotify-icon">
                    <FontAwesomeIcon icon={faSpotify} />
                    <span>Spotify<small>®</small></span>
                </h1>
            </div>

            <div className="desc">
                <h2>Spotify clone interface</h2>

                <span>
                    <h3>Developed</h3>&nbsp;
                    <h3>By</h3>&nbsp;
                    <h3>Gabriel P. Oliveira</h3>
                </span>

            </div>

            <div className="social-contact">


                <span className="linkedin">
                    <a href="https://www.linkedin.com/in/gabriel-97-oliveira" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} /> Contact with Linkedin
                    </a>
                </span>
                <span className="codepen">
                    <a href="https://codepen.io/Biel_" target="_blank">

                        <FontAwesomeIcon icon={faCodepen} /> Contact with Codepen
                    </a>
                </span>

                <span className="github">
                    <a href="https://github.com/Biel-97" target="_blank">
                        <FontAwesomeIcon icon={faGithub} /> Contact with Github
                    </a>
                </span>
            </div>

            <div className="button-line">
                <button className="login-button"><a href={LoginUrl}>LOQ IN</a></button>
            </div>
        </div>
    )
}

export default Login
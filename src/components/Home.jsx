import React from 'react'
import './Home.css'
import Recently from './Recently'
import TopArtists from './TopArtists'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from "../DataProvider";

function Home() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <main className="home-page" >
            <div className="user-header">
                <div className="user-icon">
                    {(user?.images[0]?.url) !== undefined ? <img src={user?.images[0]?.url} alt="" /> : <FontAwesomeIcon icon={faUser} />}
                    <span>{user?.display_name}</span>
                    <FontAwesomeIcon icon={faSortDown} />
                </div>
            </div>
            <Recently></Recently>
            <TopArtists></TopArtists>
        </main>
    )
}

export default Home

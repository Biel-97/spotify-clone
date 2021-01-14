import React from 'react'
import './Home.css'
import Recently from './Recently'
import TopArtists from './TopArtists'


function Home() {

    return (
        <main className="home-page" >
            <Recently></Recently>
            <TopArtists></TopArtists>
        </main>
    )
}

export default Home

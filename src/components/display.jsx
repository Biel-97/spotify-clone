import React, { useEffect, useState } from 'react'
import { useStateValue } from "../DataProvider";

import DisplayBodyElements from './DisplayBodyElements'
import './display.css'

function Display() {
    const [{ discover_weekly, user, Next_playlist }, dispatch] = useStateValue();

    const [header, setHeader] = useState({})


    useEffect(() => {
        if (user !== undefined && Next_playlist == '') {
            if (discover_weekly !== undefined && discover_weekly !== null) {

                setHeader({
                    img: discover_weekly.images[0].url,
                    description: discover_weekly.description,
                    name_Banner: discover_weekly.name
                })

            }
        }
        if(user !== undefined &&  Next_playlist !== ''){

            if (Next_playlist !== undefined && Next_playlist !== null) {

                setHeader({
                    img: Next_playlist.images[0].url,
                    description: Next_playlist.description,
                    name_Banner: Next_playlist.name
                })
            }
        }
    }, [user, discover_weekly, Next_playlist])

    return (
        <>
            <main className="display">
                <div className="display-header">
                    <div className="header-banner">
                        <img className="baner-img" src={header.img} alt="" />
                        <div>
                            <h6>PLAYLIST</h6>
                            <h1>{header.name_Banner}</h1>
                            <span>{header.description}</span>
                        </div>
                    </div>
                </div>
                <div className="display-body">
                    <DisplayBodyElements></DisplayBodyElements>
                </div>
            </main>

        </>
    )
}

export default Display

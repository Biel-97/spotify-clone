import React, { useEffect, useState } from 'react'
import { useStateValue } from "../DataProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSortDown } from '@fortawesome/free-solid-svg-icons'

import './display.css'

function Display() {
    const [{ discover_weekly, top_artists, user }, dispatch] = useStateValue();
    const [usericon, setusericon] = useState()

    const [header, setHeader] = useState({})


    console.log(discover_weekly)
    useEffect(() => {
        if (user !== undefined) {
            if (user.images) {
                setusericon(
                    <span className="user-icon">
                        <FontAwesomeIcon icon={faUser} />
                        {user.display_name}
                        <FontAwesomeIcon icon={faSortDown} />
                    </span>
                )
            } else { setusericon(user.images[0]) }
            if (discover_weekly !== undefined && discover_weekly !== null) {
                console.log(discover_weekly)

                setHeader({
                    img: discover_weekly.images[0].url,
                    description: discover_weekly.description,
                    name_Banner: discover_weekly.name
                })


            }
        }
    }, [user, discover_weekly])

    return (
        <>
            <main className="display">
                <div className="display-header">
                    {usericon}
                    <div className="header-banner">
                        <img className="baner-img" src={header.img} alt="" />
                        <div>
                            <h6>PLAYLIST</h6>
                            <h1>{header.name_Banner}</h1>
                            <span>{header.description}</span>

                        </div>
                    </div>
                </div>
                <div className="display-body">teste</div>
            </main>

        </>
    )
}

export default Display

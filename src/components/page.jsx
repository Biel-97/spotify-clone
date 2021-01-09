import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import Display from './display'
import Footer from './footer'

import { useStateValue } from "../DataProvider";
import { ACTION } from '../reducer'



function Page() {
    const [{ playlists, user, playing, discover_weekly, top_artists }, dispatch] = useStateValue();
    // console.log(playlists)
    const [nome, setnome] = useState('')

    useEffect(() => {
        if (user !== undefined) {
            setnome(user.display_name)
        }
    }, [user])

    function back() {
        dispatch({
            type: ACTION.SET_TOKEN,
            token: null,
        });
    }
    return (
        <>
            {/* <button onClick={e => back(e)}>
                Voltar
            </button> */}
            <div className="content">
                <Sidebar></Sidebar>
                <Display></Display>
            </div>
            <Footer/>

        </>
    )
}

export default Page
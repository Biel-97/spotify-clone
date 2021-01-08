import React, { useEffect, useState } from 'react'


import { useStateValue } from "../DataProvider";
import { ACTION } from '../reducer'

function Page({ spotify }) {
    const [{ playlists, user, playing, discover_weekly, top_artists }, dispatch] = useStateValue();
    console.log(top_artists)
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
        <div>

            <h1>---Pagina Principal---</h1>
            <h3>
                {nome}
            </h3>

            <button onClick={e => back(e)}>
                Voltar
            </button>
        </div>
    )
}

export default Page
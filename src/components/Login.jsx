import React from 'react'
import { LoginUrl } from '../spotify'

function Login(){

    
    return(
        <div>
            <h1>---Pagina de login---</h1>
            <button><a href={LoginUrl}>Login</a></button>


        </div>
    )
}

export default Login
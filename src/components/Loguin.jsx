import React from 'react'
import { LoguinUrl } from '../spotify'

function Login(){
    return(
        <div>
            <button><a href={LoguinUrl}>Loguin</a></button>
        </div>
    )
}

export default Login
import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import Display from './display'
import Home from './Home'
import Footer from './footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from "../DataProvider";




function Page() {
    const [{ user, Set_Page_View }, dispatch] = useStateValue();
    const [nomeCard, setNomeCard] = useState('')

    useEffect(() => {
        if (user !== null) {
            // if(user.images !== undefined){
            //     console.log('com')

            // }else{

            //     console.log('sem')
            // }
            // if(user.images !== undefined){
            //     console.log('!== undefined images')

            // }
            // if(user.images[0] !== undefined){
            // console.log(user.images[0])
            // // setNomeCard(
            // //     <span className="user-icon">
            // //         <img src={user.images[0]} alt=""/>
            // //     </span>
            // // )
            // }
        } else {
            console.log('nao')
        }
    }, [user])


    return (
        <>

            <div className="content">
                <Sidebar></Sidebar>
                {Set_Page_View == true ? <Home /> : <Display />}

            </div>
            <Footer />

        </>
    )
}

export default Page
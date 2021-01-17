import React from 'react'
import Sidebar from './sidebar'
import Display from './display'
import Home from './Home'
import Footer from './footer'


import { useStateValue } from "../DataProvider";




function Page() {
    const [{ Set_Page_View }, dispatch] = useStateValue();
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
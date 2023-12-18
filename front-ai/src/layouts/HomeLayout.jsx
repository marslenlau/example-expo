import React,{Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import '../assets/scss/layout/home_style.scss'
const HomeLayout = () => {
    return (
        <Fragment>
            <div className='container-login'>
                <Outlet/>
            </div>
        </Fragment>
    )
}

export default HomeLayout
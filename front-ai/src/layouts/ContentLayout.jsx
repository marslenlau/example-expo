import React,{ Fragment, useEffect} from 'react'
import {Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar';
import {  Layout } from 'antd';
const {  Content } = Layout;
import '../assets/scss/layout/content_style.scss'
const ContentLayout = () => {
    return (
        <Fragment>
            {true ?
                (
                    <div className='content-layout'>
                        <Layout className='layout'>
                            <Navbar/>
                            <Content>
                                <Outlet/>
                            </Content>
                        </Layout>
                    </div>
                ):
                <Navigate to={`${import.meta.env.VITE_API_URL_NGINX}`} />
            }
        </Fragment>
    )
}

export default ContentLayout
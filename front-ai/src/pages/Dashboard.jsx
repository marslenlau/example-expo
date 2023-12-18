import React from 'react'
import '../assets/scss/pages/dashboard/dashboard_style.scss'
//? import components antd
import { Row, Col } from 'antd';
//?
import useInformation from '../hooks/useInformation';
import avatar from '../assets/img/avatar.png'
import { VideoCameraOutlined  } from '@ant-design/icons';
const Dashboard = () => {
    const {information} = useInformation()
    return (
        <>
            <div className="card-container">
                <div className="card bg-white p-4 w-3/4">
                    <h1 className='text-center bg-indigo-800 p-2 text-white'>Información De usuario</h1><hr />
                    <Row>
                        <Col span={12}>
                            <img src={avatar} alt="" style={{width : '100%', borderRadius: '1rem'}}/>
                        </Col>
                        <Col span={12} className='p-4'>
                            <h3>Nombre</h3>
                            <span style={{ fontSize : '1.5rem', textTransform : 'capitalize', fontWeight : 'bold'}}>{information.name} {information.lastname}</span>
                            <h3>Empresa</h3>
                            <span style={{ fontSize : '1.5rem', textTransform : 'capitalize', fontWeight : 'bold'}}>{information.bussiness}</span>
                            <h3>Email</h3>
                            <div className='pb-4'>
                                <span style={{fontSize: '1.5rem'}}>{information.email}</span>
                            </div>
                            <div className='text-center p-4 bg-indigo-800' style={{borderRadius : '1rem'}}>
                                <span style={{fontSize: '2rem', color: 'white'}}>La mejor seleccion de plantillas personalizada para ti</span>
                            </div>
                            <div className='text-center' style={{ fontSize : '5rem'}}><VideoCameraOutlined /></div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Dashboard
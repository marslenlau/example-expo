import React, {useState} from 'react'
//? import components antd
import { Row, Col } from 'antd';
//? import styles
import '../assets/scss/pages/list/list_style.scss'
import ReactPlayer from 'react-player/youtube'
import useInformation from '../hooks/useInformation';
const List = () => {
    const {movies} = useInformation()
    return (
        <>
            <div className="card-container">
                <div className="card bg-slate-200 p-4 w-3/4">
                    <h1>Listado de Contenido Multimedia</h1><hr />
                    <Row gutter={10}>
                        {
                            movies.map((movie) => {
                                return(
                                    <Col span={12} className='pb-2'>
                                        <div className='bg-indigo-800 text-white p-2 text-center'>
                                            <span style={{fontSize: '1.4rem', fontWeight: 'bold'}} >{movie.name}</span>
                                        </div>
                                        <div className='p-3'>
                                                <img src={movie.link} alt="" style={{width : '100%'}}/>
                                        </div>
                                        <div className='p-2 text-justify'>
                                            <div style={{fontSize: '1.2rem'}} className='pb-1'><strong>Descripcion</strong></div>
                                            <span style={{fontFamily: 'cursive', fontSize: '1rem'}}>{movie.description}</span>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </div>
        </>
    )
}

export default List
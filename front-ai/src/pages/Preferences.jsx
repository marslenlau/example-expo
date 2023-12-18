import React from 'react'
//? import components antd
import { Row, Col, Button } from 'antd';
import useInformation from '../hooks/useInformation';
//? import styles
import '../assets/scss/pages/preferences/preferences_style.scss'
import ReactPlayer from 'react-player/youtube'
import { SmileOutlined } from '@ant-design/icons';
import { Image } from 'antd';
const Preferences = () => {
    const {preferences, obtainPreferences} = useInformation()
    const onClickPreferences = () => {
        obtainPreferences()
    }
    return (
        <>
            <div className="card-container">
                <div className="card bg-slate-200 p-4 w-3/4">
                    <h1>Sugerencias</h1><hr />
                    <div className='bg-indigo-800 p-4 text-white' style={{fontSize: '1.2rem', borderRadius: '1rem'}}>
                        <span>
                            Las sugerencias son creadas por un algoritmo de inteligencia artificial, el cual se encarga de analizar tus gustos y preferencias para poder recomendarte contenido multimedia que se adapte a tus gustos.
                        </span>
                        <div className='p-4'>
                            <Button 
                            type="primary" 
                            className='mt-2 bg-white text-indigo-800 font-bold' 
                            size='large' 
                            onClick={onClickPreferences}>Actualizar Sugerencias</Button>
                        </div>
                        
                    </div>
                    <hr />
                    <h2>Sugerencias Para {localStorage.getItem('name')}</h2>
                    <hr />
                    <Row gutter={10}>
                            {
                                preferences.map((movie) => {
                                    return(
                                        <Col span={12} className='pb-2'>
                                            <div className='bg-indigo-800 text-white p-2 text-center'>
                                                <span style={{fontSize: '1.4rem', fontWeight: 'bold'}} >{movie.title}</span>
                                            </div>
                                            <div className='p-3'>
                                                <Image src={movie.link} alt="" style={{width : '100%'}}/>
                                            </div>
                                            <div 
                                                className='bg-indigo-800 text-white p-3' 
                                                style={{borderBottomLeftRadius : '1rem', borderBottomRightRadius : '1rem', display: 'flex' , justifyContent: 'space-around'}}>
                                                <div className='text-center'>
                                                    <div>Informacion - Caracteristicas</div>
                                                    <div className='text-5xl pt-2'><SmileOutlined /></div>
                                                </div>
                                                <div className='bg-white text-black p-3' style={{borderRadius: '1rem'}}>
                                                    <div><strong>Formal</strong> - {movie.features.formally * 100}%</div>
                                                    <div><strong>Divertido</strong>  - {movie.features.fun * 100} %</div>
                                                    <div><strong>Intrigante</strong>  - {movie.features.intriguing * 100} %</div>
                                                    <div><strong>Vangurdista</strong>  - {movie.features.avant * 100} %</div>
                                                    <div><strong>Calido</strong>  - {movie.features.warm * 100} %</div>
                                                </div>
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

export default Preferences
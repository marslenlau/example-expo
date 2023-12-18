import React,{Fragment,  useState} from 'react'
//? import router dom
import {useNavigate} from 'react-router-dom'
//? import components antd
import { Row, Col,  Button, Spin, Input, Space } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
//? import styles
import '../assets/scss/pages/login/login_style.scss'
import {toastsuccess, toasterror} from '../helpers/messages'

import useLogin from '../hooks/useLogin';

const Login = () => {
    //? useHooks
    const {submitFormLogin} = useLogin()

    //? useStates 
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    const {email, password} = inputs
    
    //? useNavigate
    const navigate = useNavigate()

    //? functions
    const handleChangeInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = () => {
        //* send data to context
        if(email === '' || password === ''){
            toasterror('Todos los campos son obligatorios');
            return
        }
        // submitFormLogin(inputs)
        submitFormLogin(inputs)
        
        setTimeout(() => {
            navigate(`/dashboard`)
        }, 2000);
    }
    return (
        <Fragment>
            <div className='card-login'>
                <div className='header'>
                    <h3>Sistema MULTIMEDIA</h3>
                </div>
                <div className='form-container-login'>
                <form className='form-login'>
                    <Row>
                    <Col span={24} className='pb-5'>
                        <label>Email</label>
                        <Input
                            name='email'
                            placeholder="ejm. marslnlau@gmail.com"
                            size="large"
                            type='text' 
                            suffix={<UserOutlined />}
                            onChange={handleChangeInputs}
                        />
                    </Col>
                    <Col span={24} className='pb-5'>
                        <label>Contraseña</label>
                        <Input.Password
                            name='password'
                            placeholder="ejm. 12345"
                            size="large"
                            type='text' 
                            onChange={handleChangeInputs}
                        />
                    </Col>
                    <Col span={24} className='pb-5'>
                        <Button 
                            type="primary" 
                            block
                            size='large'
                            icon={<UnlockOutlined />}
                            onClick={onSubmit}
                        >
                        Ingresar
                        </Button>
                    </Col>
                    <Col xs={24} md={12} className='pb-3 text-center'>
                        <a href="/">Ingresar como invitado</a>  
                    </Col>
                    <Col xs={24} md={12} className='pb-3 text-center'>
                        <a href="/">Olvide mi contraseña?</a>
                    </Col>
                    </Row>
                </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login
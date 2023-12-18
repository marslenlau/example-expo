import React,{createContext, useEffect, useState} from 'react'
import clientAxios from '../config/conection/clientAxios'
import {headerJson} from '../config/conection/headers'
//? import toast
import {toastsuccess, toasterror} from '../helpers/messages'
import useInformation from '../hooks/useInformation'
//?create conxtext
const LoginContext = createContext()
//? init provider
const LoginProvider = ({children}) => {
    //? useState
    const [auth, setAuth] = useState({})
    const {information , setInformation} = useInformation()
    //? path
    const pathLogin = '/auth-user'
    const pathProfile = '/profile-user'

    //? functions
    const submitFormLogin = async (inputs) => {
        try {
            const response = await clientAxios.post(pathLogin, inputs, headerJson);
            const information = response.data
            if(response.status === 200){
                toastsuccess('Bienvenido al sistema multimedia')
                localStorage.setItem('id', information.id)
                localStorage.setItem('name', information.bussiness)
                setInformation(information)
            }else{
                toasterror('Error de autentificacion');
            }
        } catch (error) {
            toasterror(error.response.data.message);
        }
    };

    return (
        <LoginContext.Provider 
            value={{
                auth,
                setAuth,
                submitFormLogin,
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}
export {
    LoginProvider
}
export default LoginContext
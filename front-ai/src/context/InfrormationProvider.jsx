import React, {createContext, useEffect, useState} from 'react'
import {toastsuccess, toasterror} from '../helpers/messages'
//? import axios
import clientAxios from '../config/conection/clientAxios'
import clientAxiosAI from '../config/conection/clientAxiosAI'
import {headerJson} from '../config/conection/headers'
const InformationContext = createContext()
const InformationProvider = ({children}) => {
    const prueba = 'Lenny'
    const pathUser = '/identity-user'
    const pathMovies = '/get-movies'
    const pathPreferences = '/obtener_datos'
    const [information, setInformation] = useState([])
    const [movies, setMovies] = useState({})
    const [preferences, setPreferences] = useState([])
    const [info, setInfo] = useState([])
    useEffect(() => {
        const obtainInformation = async () => {
            try {
                const token = localStorage.getItem('id')
                const info = {
                    id: token
                }
                const response = await clientAxios.post(pathUser, info, headerJson);
                const information = response.data
                console.log(information)
                setInformation(information)
            } catch (error) {
                console.log(error)
                toasterror('Fallo en el servidor');
            }
        }
        const obtainMovies = async () => {
            try {
                const response = await clientAxios.get(pathMovies, headerJson);
                const information = response.data
                setMovies(information.data)
            } catch (error) {
                console.log(error)
                toasterror('Fallo en el servidor');
            }
        
        }
        obtainInformation()
        obtainMovies()
    }, [])

    const obtainPreferences = async() => {
        try {
            const nameId = localStorage.getItem('name')
            const data = {
                user_id : nameId
            }
            const response = await clientAxiosAI.post(pathPreferences, data, headerJson);
            toastsuccess('Recomendaciones obtenidas correctamente')
            setPreferences(response.data.recommendations)
        } catch (error) {
            console.log(error)
            toasterror('Fallo en el servidor');
        }
        
    }
    
    return (
        <InformationContext.Provider
            value={{
                prueba,
                information,
                movies,
                preferences,
                info,
                setInformation,
                setMovies,
                obtainPreferences,
                setPreferences,
                setInfo
            }}
        >
            {children}
        </InformationContext.Provider>
    )
}
export {
    InformationProvider
}
export default InformationContext
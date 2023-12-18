import React, {useContext} from 'react'
import InformationContext from '../context/InfrormationProvider'
const useInformation = () => {
    return useContext(InformationContext)
}

export default useInformation
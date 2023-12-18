import axios from 'axios'

const clientAxios = axios.create({
    baseURL: 'http://localhost:3000/api/v1/library/rest'
})

export default clientAxios;
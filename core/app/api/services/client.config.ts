import axios from 'axios'

// Axios Client
export const AxiosClient = axios.create({
    baseURL: 'http://localhost:4050/',
    timeout: 1000
})


import axios from 'axios'

// Axios Client
export const AxiosClient = axios.create({
    baseURL: 'https://api-proof-app.herokuapp.com/',
    timeout: 1000
})


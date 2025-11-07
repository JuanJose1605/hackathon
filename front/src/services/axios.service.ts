import axios from "axios"


export const axiosClient = axios.create({
    baseURL: process.env.BACKEND_URL || 'http://localhost:3000/',
    headers:{
        "Content-Type": 'application/json'
    }
})
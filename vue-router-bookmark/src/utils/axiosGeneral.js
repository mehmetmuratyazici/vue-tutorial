import axios from 'axios'

export const axiosGeneral = axios.create({
    baseURL :"http://localhost:3000",
    headers : {
        "Content-Type" : "application/json",
        tokenMmy : "Authorization asdasdsadsad",
        withCredentials : false,
    },
})
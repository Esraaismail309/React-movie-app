import axios from "axios"


export const movieAxiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

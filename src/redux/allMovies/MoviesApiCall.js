import axios from "axios"
const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})


export function getMovies(page, search) {
    if (search) {
        return axiosInstance.request({
            method: 'GET',
            url: `search/movie?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff&page=${page}&query=${search}`,
        })
    }
    else {
        return axiosInstance.request({
            method: 'GET',
            url: `movie/popular?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff&`,
            params: {
                page,
            },
        })
    }
}
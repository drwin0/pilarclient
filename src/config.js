import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://pilar-api.herokuapp.com/api/"
})
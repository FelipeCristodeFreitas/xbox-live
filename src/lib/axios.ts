import axios from "axios";


export const api = axios.create({
    baseURL: 'https://m5-orpin.vercel.app/'
})
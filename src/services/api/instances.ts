import axios, { AxiosInstance } from 'axios'


const DATA_LIST : AxiosInstance = axios.create({
    baseURL : 'https://api.stackexchange.com/2.2',
})

export const instances = {
  
    DATA_LIST,
} 


import axios from 'axios'

let instance = axios.create({
    baseURL: 'http://127.0.0.1:8080'
})

export default function request(config){
    return instance(config)
}
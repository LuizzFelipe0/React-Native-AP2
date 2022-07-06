import axios from "axios";

export const api = axios.create({
    baseURL: "http://gateway.marvel.com/v1/public/",
    headers: {
        'Content-Type': 'application/json',
    }
}) 

export const apiAuth = axios.create({
    baseURL: "http://192.168.1.15:8080/"
}) 

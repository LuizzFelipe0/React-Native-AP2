import { api } from "./http";

const getCharacters = (time: number, publicKey: string, hash: string) => {
    return api.get(`characters?ts=${time}&apikey=${publicKey}&hash=${hash}`)
}

const getCharacterById = (time: number, publicKey: string, hash: string,characterId:Number) => {
    return api.get(`characters/${characterId}?ts=${time}&apikey=${publicKey}&hash=${hash}`)
}

export default {
    getCharacters,getCharacterById
}
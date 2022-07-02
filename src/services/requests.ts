import { api } from "./http";

const getCharacters = (time: number, publicKey: string, hash: string) => {
    return api.get(`characters?ts=${time}&apikey=${publicKey}&hash=${hash}`)
}

export default {
    getCharacters
}
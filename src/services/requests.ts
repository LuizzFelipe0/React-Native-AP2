import { character } from "../screens/MarvelList";
import { api } from "./http";

const getCharacters = (time: number, publicKey: string, hash: string) => {
    return api.get(`characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=100`)
}

const getCharactersByInitial = (time: number, publicKey: string, hash: string,initial:string) => {
    return api.get(`characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=100&nameStartsWith=${initial}`)
}

const getCharacterById = (time: number, publicKey: string, hash: string,characterId:Number) => {
    return api.get(`characters/${characterId}?ts=${time}&apikey=${publicKey}&hash=${hash}`)
}

const getComics = (time: number, publicKey: string, hash: string) => {
    return api.get(`comics?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=100`)
}

const getComicsByIdOfHero = (time: number, publicKey: string, hash: string,id:Number) => {
    return api.get(`comics?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=100&startYear=2019`)
}

export default {
    getCharacters,getCharacterById,getCharactersByInitial,getComics,getComicsByIdOfHero
}
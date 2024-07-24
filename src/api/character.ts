import { GetCharacters } from "@/app/lib/types"
import { PEOPLE_PATH } from "@/config"
import axios from "axios"

export const getCharacter = (name: string) =>{
    return axios.get<GetCharacters>(`${PEOPLE_PATH}/?search=${name}`)
} 
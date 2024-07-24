'use client'
import { Character, CharacterContextType, FilterTypes } from "@/app/lib/types";
import { createContext, useState } from "react"

const defaultValue: CharacterContextType = {
  characters: [],
  addCharacter: () => {},
  createOptionToFilter: () => [],
};

export const CharacterContext = createContext<CharacterContextType>(defaultValue);

export const CharacterProvider = ({children}: {children: React.ReactNode}) =>{
    const [characters, setCharacters] = useState<Character[]>([])

    const addCharacter = (character: Character) =>{
        const characterExists = characters.some((c)=> c.name === character.name);
        if(!characterExists) setCharacters([...characters, character])
    };

    const createOptionToFilter = (type: keyof FilterTypes): string[] =>{
        const options = characters.map( character => character[type]);
        return Array.from(new Set(options))
    }

    return(
        <CharacterContext.Provider value={{characters, addCharacter, createOptionToFilter}}>
            {children}
        </CharacterContext.Provider>
    )
}
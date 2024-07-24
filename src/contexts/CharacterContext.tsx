'use client'
import { Character, CharacterContextType } from "@/app/lib/types";
import { createContext, useState } from "react"

export const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider = ({children}: {children: React.ReactNode}) =>{
    const [characters, setCharacters] = useState<Character[]>([])

    const addCharacter = (character: Character) =>{
        setCharacters([...characters, character])
    };

    return(
        <CharacterContext.Provider value={{characters, addCharacter}}>
            {children}
        </CharacterContext.Provider>
    )
}
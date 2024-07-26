'use client'
import { Character, CharacterContextType } from "@/app/lib/types";
import { createContext, useState } from "react";

const defaultValue: CharacterContextType = {
  characters: [],
  addCharacter: () => {},
};

export const CharacterContext = createContext<CharacterContextType>(defaultValue);

export const CharacterProvider = ({children}: {children: React.ReactNode}) => {
    const [characters, setCharacters] = useState<Character[]>([]);

    const addCharacter = (character: Character) => {
        const characterExists = characters.some((c) => c.name === character.name);
        if (!characterExists) {
            setCharacters([...characters, character]);
        }
    };

    return (
        <CharacterContext.Provider value={{ characters, addCharacter }}>
            {children}
        </CharacterContext.Provider>
    );
};

export interface SearchBarProps {
    handleSearch: (event: React.KeyboardEvent<HTMLInputElement>)=>void;
}

export interface Character {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: string[];
    starships: string[];
    url: string;
    vehicles: string[];
}

export interface GetCharacters {
    count: number;
    next: string | null;
    previous: string | null;
    results: Character[];
  }

export interface FilterTypes {
    gender: string;
    skin_color: string;
    mass: string;
}  
export interface CharacterContextType {
    characters: Character[];
    addCharacter: (character: Character) => void;
    createOptionToFilter: (type: keyof FilterTypes) => string[];
}
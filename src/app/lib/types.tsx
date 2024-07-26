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
    films: string;
}  

export interface CharacterContextType {
    characters: Character[];
    addCharacter: (character: Character) => void;
}

export interface FilterBarProps {
    setFilters: React.Dispatch<React.SetStateAction<FilterTypes>>;
}

export interface FilterFilm {
    url: string;
    title: string;
}
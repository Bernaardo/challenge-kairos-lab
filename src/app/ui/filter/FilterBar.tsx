import { useContext, useEffect, useState } from "react";
import { filmsFilter, genderFilter, skinColorFilter } from "@/app/lib/constans";
import { FilterBarProps, FilterFilm } from "@/app/lib/types";
import { CharacterContext } from "@/contexts/CharacterContext";
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { getFilm } from "@/api/character";

const FilterBar = ({setFilters}: FilterBarProps) => {
    const {characters} = useContext(CharacterContext)
    const [films, setFilms] = useState<FilterFilm[]>([])
    const [loading, setLoading] = useState(false);

    const genders = Array.from(new Set(characters.flatMap(character => character[genderFilter])));
    const skinColors = Array.from(new Set(characters.flatMap(character => character[skinColorFilter])));

    const handleFilterChange=(key: string, value: string)=>{
        setFilters((prev)=>({...prev, [key]:value}))
    }

    const getFilms = async () => {
        setLoading(true);
        try {
            const filmUrls = Array.from(new Set(characters.flatMap(character => character.films)));
            const filmPromises = filmUrls.map(async (url) => {
                const { data } = await getFilm(url);
                return { url, title: data.title };
            });
            const filmData = await Promise.all(filmPromises);
            setFilms(filmData);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (characters.length > 0 ) {
            getFilms();
        }
    }, [characters]);

    
    return (
        <Grid container xs={12} lg={12} spacing={2}>
            <Grid item xs={4} lg={4}>
                <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select onChange={(e: SelectChangeEvent<string>)=>{handleFilterChange(genderFilter, e.target.value)}}>
                        <MenuItem value={''}>Todos</MenuItem>
                        {genders.map((gender, index:number)=>(
                            <MenuItem key={`gender-${index}`} value={gender}>
                                {gender}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4} lg={4}>
                <FormControl fullWidth>
                    <InputLabel>Skin Color</InputLabel>
                    <Select onChange={(e: SelectChangeEvent<string>)=>{handleFilterChange(skinColorFilter, e.target.value)}}>
                        <MenuItem value={''}>Todos</MenuItem>
                        {skinColors.map((skin, index:number)=>(
                            <MenuItem key={`sking-${index}`} value={skin}>
                                {skin}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4} lg={4}>
                <FormControl fullWidth>
                    <InputLabel>Films</InputLabel>
                    <Select onChange={(e: SelectChangeEvent<string>)=>{handleFilterChange(filmsFilter, e.target.value)}}>
                        <MenuItem value={''}>Todos</MenuItem>
                        {films.length>0 && films.map((film, index:number)=>(
                            <MenuItem key={`film-${index}`} value={film.url}>
                                {film.title}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
       
        </Grid>
    )
}

export default FilterBar;
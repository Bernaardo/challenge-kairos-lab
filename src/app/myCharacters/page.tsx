"use client"
import { useContext, useEffect, useState } from "react"
import { CharacterContext } from "@/contexts/CharacterContext"
import { useRouter } from 'next/navigation';
import { Button, Typography, Grid } from "@mui/material";
import FilterBar from "../ui/filter/FilterBar";
import { Character } from "../lib/types";
import CharacterCard from "../ui/character/CharacterCard";

export default function MyCharactes(){

    const {characters} = useContext(CharacterContext)
    const router = useRouter();
    const [filters, setFilters] = useState({gender:'', skin_color:'', films:''})
    const [filteredChar, SetFilteredChar] = useState<Character[]>(characters)
    const [page, setPage] = useState(1);
    const charactersPerPage = 2;

    useEffect(()=>{
        if(characters.length===0) router.push('/');
    }, [])

    useEffect(()=>{
      let filtered:Character[] = characters;
      if(filters.gender){
        filtered = filtered.filter( ch=> ch.gender === filters.gender)
      }
      if(filters.skin_color){
        filtered = filtered.filter( ch=> ch.skin_color === filters.skin_color)
      }
      if(filters.films){
        filtered = filtered.filter(ch => ch.films.includes(filters.films));
      }

      SetFilteredChar(filtered);
      
    },[filters])

    const paginatedCharacters = filteredChar.slice((page-1)*charactersPerPage, page*charactersPerPage)

    return (
        <Grid item container display='flex' justifyContent='center' alignItems='center'>
          <Grid item  xs={12} lg={12}>
            <FilterBar setFilters={setFilters}/>
          </Grid>
          {paginatedCharacters?.length>0 ? paginatedCharacters.map((char)=>(
                <Grid item xs={12} key={char.name}>
                    <CharacterCard character={char} />
                </Grid>
            )):(
              <Typography variant="h6" textAlign="center" sx={{ margin: 2 }}>
                  No characters found.
              </Typography>
          )}
        <Grid margin={2}>
          <Button  onClick={()=> router.push('/')} variant="contained">back </Button>
        </Grid>
      
      </Grid>
    )

}
"use client"
import { useContext, useEffect, useState } from "react"
import { CharacterContext } from "@/contexts/CharacterContext"
import { useRouter } from 'next/navigation';
import { Button, Typography, Grid, Pagination } from "@mui/material";
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

    const paginatedCharacters = filteredChar.slice((page-1)*charactersPerPage, page*charactersPerPage)

    const handlePageChange = (event:React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
  };

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


    return (
        <Grid container xs={12} lg={12} display='flex' justifyContent='center' alignItems='center' >
          <Grid item  xs={12} lg={12} sx={{marginTop:2, display:'flex', justifyContent:'center'}} >
            <FilterBar setFilters={setFilters}/>
          </Grid>
          {paginatedCharacters?.length>0 ? paginatedCharacters.map((char)=>(
                <Grid item xs={12} md={6} lg={6} key={char.name} sx={{paddingLeft:2, paddingRight:2}}>
                    <CharacterCard character={char} />
                </Grid>
            )):(
              <Typography variant="h6" textAlign="center" sx={{ margin: 2 }}>
                  No characters found.
              </Typography>
          )}
           <Grid item container xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:2,}}>
            <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <Pagination
                    count={Math.ceil(filteredChar.length / charactersPerPage)}
                    page={page}
                    onChange={handlePageChange}
                    showFirstButton 
                    showLastButton
                    sx={{ marginTop:-4}}
                />
            </Grid>
                <Button onClick={() => router.push('/')} variant="contained" sx={{ position: 'absolute', right: 10 }}>
                    Back
                </Button>
          </Grid>
      
      </Grid>
    )

}
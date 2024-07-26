'use client'
import { Button, Typography, Grid } from "@mui/material";
import SearchBar from "./ui/searchCharacter/SearchBar";
import { useContext, useState } from "react";
import { getCharacter } from "@/api/character";
import { Character } from "./lib/types";
import CustomLoading from "./ui/loader/CustomLoading";
import { CharacterContext } from "@/contexts/CharacterContext";
import { useRouter } from 'next/navigation';
import CharacterCard from "./ui/character/CharacterCard";

export default function Home() {
  const router = useRouter();
  const characterContext = useContext(CharacterContext)
 
  const [characterOptions, setCharacterOptions] = useState<Character[]>([])
  const [characterSelected, setCharacterSelected] = useState<Character>()
  const [loading, setLoading] = useState(false);

  const handleSearch = async ( event: React.KeyboardEvent<HTMLInputElement> ) =>{
    const keyEntered = event.key
    const isValidkey = /^[a-zA-Z0-9\s-]$/.test(keyEntered);
    if(!isValidkey) return;

    const name: string = event.currentTarget.value
    if(name.length>=3){
      setLoading(true);
    try {
      const {data}= await getCharacter(name)
      setCharacterOptions(data.results)
      
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }}
  }

  const handleCharacterSelect = (char: Character) => {
    setCharacterSelected(char);
    characterContext.addCharacter(char);
  }

  const navigateToMyCharactes = () =>{
    router.push('/myCharacters')
  }

  return (
    <Grid container xs={12} lg={12} sx={{height:'100%', width:'100%'}} display='flex' flex={1} justifyContent='center'  alignItems='center' rowSpacing={2} >
      <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent:'center', marginTop:2}}>
        <SearchBar handleSearch={handleSearch}/>
      </Grid>
      {loading ?
      <Grid item xs={12} lg={12} display='flex' justifyContent='center' alignItems='center' margin={2}>
        <CustomLoading/>
      </Grid>
              :
      <Grid item container display='flex' justifyContent='center' alignItems='center'>
      {characterOptions?.length>0 && characterOptions.map((char)=>{
       return (
        <Grid item  >
          <Button onClick={()=>handleCharacterSelect(char)} variant="outlined" size="small">
            <Typography variant="h5">{char.name}</Typography>
          </Button>
        </Grid>
        )
      })}
      </Grid>
}
      <Grid item container sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {characterSelected && 
        <Grid item xs={12} md={9} lg={9}  sx={{margin:0, padding:1 }}>
         <CharacterCard character={characterSelected}/>
        </Grid>
        }
      {characterContext.characters.length>0 &&
        <Grid item xs={12} md={3} lg={3} sx={{display:'flex', justifyContent:'center', padding:1}}>
          <Button  onClick={navigateToMyCharactes} variant="contained">SEE ALL SELECTED CHARACTERS</Button>
        </Grid>
        }
      </Grid>
    </Grid>
  );
}

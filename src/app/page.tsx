'use client'
import { Button, Card, CardHeader, Grid } from "@mui/material";
import SearchBar from "./ui/searchCharacter/SearchBar";
import { useContext, useState } from "react";
import { getCharacter } from "@/api/character";
import { Character } from "./lib/types";
import CustomLoading from "./ui/loader/CustomLoading";
import { CharacterContext } from "@/contexts/CharacterContext";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const characterContext = useContext(CharacterContext)
 
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false);

  const handleSearch = async ( event: React.KeyboardEvent<HTMLInputElement> ) =>{
    const name: string = event.currentTarget.value
    if(name.length>=3){
      setLoading(true);
    try {
      const {data}= await getCharacter(name)
      setCharacters(data.results)
      
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }}
  }

  const navigateToMyCharactes = () =>{
    router.push('/myCharacters')
  }




  return (
    <Grid container xs={12} lg={12} sx={{height:'100%', width:'100%'}} display='flex'  justifyContent='center'  alignItems='center'>
      <Grid item xs={12} lg={12} justifyContent='center' alignItems='center'>
        <SearchBar handleSearch={handleSearch}/>
      </Grid>
        {loading ?
          <Grid item xs={12} lg={12} display='flex' justifyContent='center' alignItems='center' margin={2}>
            <CustomLoading/>
         </Grid>
                :
        <Grid item container display='flex' justifyContent='center' alignItems='center'>
        {characters?.length>0 && characters.map((char)=>{
         return (
          <Grid item sx={{margin:2, border:1}} >
            <Card onClick={()=>characterContext.addCharacter(char)}>
            <CardHeader
            title={char.name}
            titleTypographyProps={{variant:'h3', textAlign: 'center'}} 
            />
            </Card>
          </Grid>
          )
        })}
        </Grid>
}
      <Grid item container display='flex' justifyContent='center' alignItems='center'>
        {characterContext.characters?.length>0 && characterContext.characters.map((char)=>{
         return (
          <Grid item sx={{margin:2, border:1}} >
            <Card >
            <CardHeader
            title={char.name}
            titleTypographyProps={{variant:'h3', textAlign: 'center'}} 
            />
            </Card>
          </Grid>
          )
        })}
      </Grid>
      <Grid margin={2}>
        <Button disabled={characterContext.characters?.length===0} onClick={navigateToMyCharactes} variant="contained">see all selected characters </Button>
      </Grid>
    </Grid>
  );
}

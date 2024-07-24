'use client'
import { Card, CardHeader, Grid } from "@mui/material";
import SearchBar from "./ui/searchCharacter/SearchBar";
import { useContext, useState } from "react";
import { getCharacter } from "@/api/character";
import { Character } from "./lib/types";
import CustomLoading from "./ui/loader/CustomLoading";
import { CharacterContext } from "@/contexts/CharacterContext";

export default function Home() {

  const characterContext = useContext(CharacterContext)
  if (!characterContext) {
    throw new Error("CharacterContext must be used within a CharacterProvider");
  }
  const {addCharacter} = CharacterContext;
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
        {characters?.length>0 && characters.map((character)=>{
         return (
          <Grid item sx={{margin:2, border:1}} >
            <Card onClick={()=>addCharacter(character)}>
            <CardHeader
            title={character.name}
            titleTypographyProps={{variant:'h3', textAlign: 'center'}} 
            />
            </Card>
          </Grid>
          )
        })}
        </Grid>
}
    </Grid>
  );
}

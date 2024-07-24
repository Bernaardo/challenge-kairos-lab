"use client"
import { useContext, useEffect } from "react"
import { CharacterContext } from "@/contexts/CharacterContext"
import { useRouter } from 'next/navigation';
import { Button, Card, CardHeader, Grid } from "@mui/material";

export default function MyCharactes(){

    const {characters} = useContext(CharacterContext)
    const router = useRouter();

    useEffect(()=>{
        if(characters.length===0) router.push('/');
    }, [])

    return (
        <Grid item container display='flex' justifyContent='center' alignItems='center'>
        {characters?.length>0 && characters.map((char)=>{
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
         <Grid margin={2}>
        <Button  onClick={()=> router.push('/')} variant="contained">back </Button>
      </Grid>
      </Grid>
    )

}
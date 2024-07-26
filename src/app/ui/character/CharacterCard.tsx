import { Character } from "@/app/lib/types";
import { CardContent, Card, CardHeader, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";



const CharacterCard = ({ character }: { character: Character }) => {
  const [imgSrc, setImgSrc] = useState('');

  const handleImageError = () => {
    setImgSrc('/characters/default.jpg');
  };

  useEffect(()=>{
    setImgSrc(`/characters/${character.name}.jpg`)
  },[character])
  
    return (
      <Card sx={{ margin: 0, padding: 2, maxHeight:'400px'}}>
        <CardHeader
          title={character.name}
          titleTypographyProps={{ variant: 'h3', textAlign: 'center' }}
        />
        <CardContent>
          <Grid container spacing={2} display='flex' justifyContent='space-between'>
           { <Grid item xs={6}  md={8} lg={8} sx={{ display:'flex',justifyContent:"center"}}>
               <img
              src={imgSrc}
              onError={handleImageError}
              alt={character.name}
              style={{
                maxHeight: '300px',
                maxWidth: '100%', 
                width: 'auto',
                height: 'auto', 
                objectFit: 'cover', 
                borderRadius: '3px'
              }}
            />
            </Grid>}
            <Grid item xs={6} md={4} lg={4} sx={{ justifyContent:"end"}}>
              <Typography variant="body1" ><strong>Birth Year:</strong> {character.birth_year}</Typography>
              <Typography variant="body1"><strong>Skin Color:</strong> {character.skin_color}</Typography>
              <Typography variant="body1"><strong>Gender:</strong> {character.gender}</Typography>
              <Typography variant="body1"><strong>Weight:</strong> {character.mass} kg</Typography>
              <Typography variant="body1"><strong>Eye Color:</strong> {character.eye_color}</Typography>
              <Typography variant="body1"><strong>Hair Color:</strong> {character.hair_color}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };
  
  export default CharacterCard;
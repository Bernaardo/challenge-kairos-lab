import { Character } from "@/app/lib/types";
import { CardContent, Card, CardHeader, Grid, Typography } from "@mui/material";



const CharacterCard = ({ character }: { character: Character }) => {
  
    return (
      <Card sx={{ margin: 2, padding: 2}}>
        <CardHeader
          title={character.name}
          titleTypographyProps={{ variant: 'h3', textAlign: 'center' }}
        />
        <CardContent>
          <Grid container spacing={2} display='flex' justifyContent='space-between'>
           { <Grid item xs={12}  md={4} lg={8} sx={{ display:'flex',justifyContent:"center"}}>
              <img src="" alt={character.name} style={{ height:'50px', width: '100%', borderRadius: '8px' }} />
            </Grid>}
            <Grid item xs={12} md={8} lg={4} sx={{ justifyContent:"end"}}>
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
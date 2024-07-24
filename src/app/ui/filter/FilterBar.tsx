import { CharacterContext } from "@/contexts/CharacterContext";
import { Button, Card, CardHeader, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext } from "react";
const FilterBar = () => {
    const {createOptionToFilter} = useContext(CharacterContext)
    const genders = createOptionToFilter('gender')

    return (
        <Grid container spacing={2}>
            <Grid item>
                <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select>
                        {genders.map((gender, index:number)=>(
                            <MenuItem key={`gender-${index}`}>
                                {gender}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default FilterBar;
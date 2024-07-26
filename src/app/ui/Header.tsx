import { AppBar, Grid, IconButton, Toolbar, Typography, Box } from "@mui/material";
import Image from "next/image";
import LogoKairox from "../../../public/icons/kairox_lab_logo.png";
import LogoStarWars from "../../../public/icons/starWars.png";

const Header = ()=>{
    return (
    <AppBar position="fixed" sx={{height:'80px'}}>
        <Toolbar style={{  alignItems:'center', padding: '0 10px' }} sx={{ cursor: 'default' }}>
            <Grid container>
            <Grid item xs={3} lg={3} sx={{ display: 'flex', justifyContent:'flex-start', alignItems: 'center' }}>
                <Image src={LogoKairox} alt="Logo" style={{ width: 'auto', height: '30px', marginLeft:'10px' }} />
            </Grid>
            <Grid item xs={6} lg={6} sx={{ display: 'flex', justifyContent:'center', alignItems: 'flex-end' }}>
                <Image src={LogoStarWars} alt="Logo" style={{ width: 'auto', height: '80px', marginTop:'00px' }} />
            </Grid>
            </Grid>
        </Toolbar>
    </AppBar>)
}

export default Header;
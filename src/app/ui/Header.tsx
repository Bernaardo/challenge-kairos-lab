import { AppBar, Grid, IconButton, Toolbar, Typography, Box } from "@mui/material";
import Image from "next/image";
import LogoKairox from "../../../public/icons/kairox_lab_logo.jpeg";

const Header = ()=>{
    return (
    <AppBar position="fixed" sx={{height:'60px'}}>
        <Toolbar style={{ justifyContent: 'space-between', alignItems:'center', padding: '0 10px' }} sx={{ cursor: 'default' }}>
            <Grid sx={{ display: 'flex', justifyContent:'flex-start', alignItems: 'center' }}>
                <Image src={LogoKairox} alt="Logo" style={{ width: 'auto', height: '30px', marginLeft:'10px',marginRight: '40px' }} />
            </Grid>
        </Toolbar>
    </AppBar>)
}

export default Header;
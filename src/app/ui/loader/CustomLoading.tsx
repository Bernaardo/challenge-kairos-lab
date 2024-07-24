import { Box, CircularProgress } from "@mui/material";
import React from "react"
const CustomLoading = () =>{
    return (
        <Box  sx={{
            height: 'calc(100vh - 300px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start'
        }}>
        <CircularProgress color="secondary" size={50}/>
        </Box>
    )
}

export default CustomLoading;
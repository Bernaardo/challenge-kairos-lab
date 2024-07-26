import { Box, CircularProgress } from "@mui/material";
import React from "react"
const CustomLoading = () =>{
    return (
        <Box  sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start'
        }}>
        <CircularProgress   size={50}/>
        </Box>
    )
}

export default CustomLoading;
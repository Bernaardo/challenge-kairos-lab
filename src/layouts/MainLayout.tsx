import { ReactNode } from "react"
import { Box, Container } from "@mui/material";
import Header from "@/app/ui/Header";

type MainLayoutProps = {
    children: ReactNode;
}

const MainLayout =({children}: MainLayoutProps)=>{
    return (
        <Box sx={{display:'flex', flexDirection:'column', minHeight: '100vh'}}>
            <Header/>
            <Container sx={{marginTop:'80px', display:'flex',flexGrow: 1, height:'100%'}}>
                {children}
            </Container>
        </Box>
    )   
}

export default MainLayout;
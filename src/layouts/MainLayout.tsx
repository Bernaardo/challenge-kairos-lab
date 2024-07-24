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
            <Container sx={{marginTop:'60px', flexGrow: 1}}>
                {children}
            </Container>
        </Box>
    )   
}

export default MainLayout;
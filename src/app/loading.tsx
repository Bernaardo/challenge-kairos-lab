import { Box, Typography} from "@mui/material";
import CustomLoading from "./ui/loader/CustomLoading";
export default function Loading() {
    return (
        <Box sx={{display:'flex', flex:1, width: '100%', marginTop: "100px"}}>
      <CustomLoading/>
    </Box>
    )
  }
import { Grid} from "@mui/material";
import CustomLoading from "./ui/loader/CustomLoading";
export default function Loading() {
  return (
    <Grid container xs={12} lg={12} sx={{height:'100%', width:'100%'}} display='flex' flex={1} justifyContent='center'  alignItems='center' rowSpacing={2} >
      <Grid item xs={12} lg={12} display='flex' justifyContent='center' alignItems='center' margin={2}>
        <CustomLoading/>
      </Grid>
    </Grid>
    )
  }
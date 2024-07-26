import { Box, Input, InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBarProps } from "@/app/lib/types";

const SearchBar= ({handleSearch}: SearchBarProps) => {
    
    return ( 
        <Box sx={{display:'flex', flex:1, height:'100%', justifyContent:'center'}}>
            <Input
            id="searchBar"
            placeholder="search"
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon/>
                </InputAdornment>
            }
            type="text"
            onKeyUp={handleSearch}
            />
        </Box>
    )
}

export default SearchBar;
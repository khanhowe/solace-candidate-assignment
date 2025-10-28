import {
  Box,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useSearch } from "../../hooks/useSearch";

const SearchBar = styled(TextField)({
  maxWidth: "800px",
});

const Search: React.FC = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  const handleSearchClear = () => {
    setSearchQuery("");
  };
  return (
    <Box>
      <Typography variant="h6">Search</Typography>
      <SearchBar
        value={searchQuery}
        placeholder="Search advocates by name, city, degree, specialty, or years of experience"
        onChange={(e) => setSearchQuery(e.target.value)}
        variant="outlined"
        fullWidth
        size="small"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={handleSearchClear}
                  disabled={!searchQuery}
                >
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

export default Search;

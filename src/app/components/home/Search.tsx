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

const SearchBar = styled(TextField)({
  maxWidth: "800px",
});

interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchClear: () => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange, searchClear }) => {
  return (
    <Box>
      <Typography variant="h6">Search</Typography>
      <SearchBar
        value={value}
        onChange={onChange}
        placeholder="Search advocates by name, city, degree, specialty, or years of experience"
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
                  onClick={searchClear}
                  disabled={!value}
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

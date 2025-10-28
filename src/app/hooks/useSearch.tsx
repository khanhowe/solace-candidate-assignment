import { useContext } from "react";
import { SearchContext } from "../context/search-context";

export const useSearch = () => useContext(SearchContext)!;

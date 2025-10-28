import { useContext } from "react";
import { SearchContext } from "../state/search-context";

export const useSearch = () => useContext(SearchContext)!;

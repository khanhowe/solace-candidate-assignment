import {
  styled,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { SortKey } from "@/shared/lib/types";
import { useSearch } from "../../hooks/useSearch";

const StyledHeaderCell = styled(TableCell)({
  fontWeight: "bold",
});
interface HeadCell {
  id: SortKey;
  label: string;
  numeric?: boolean;
  sortable?: boolean;
}

const headCells: HeadCell[] = [
  { id: "firstName", label: "First Name" },
  { id: "lastName", label: "Last Name" },
  { id: "city", label: "City" },
  { id: "degree", label: "Degree" },
  { id: "specialties", label: "Specialties", sortable: false },
  { id: "yearsOfExperience", label: "Years of Experience", numeric: true },
  { id: "phoneNumber", label: "Phone Number", numeric: true, sortable: false },
];

const AdvocatesTableHeader: React.FC = () => {
  const { order, setOrder, sortKey, setSortKey } = useSearch();

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: SortKey
  ) => {
    const isSameColumn = sortKey === property;
    const nextOrder = isSameColumn && order === "asc" ? "desc" : "asc";
    setSortKey(property);
    setOrder(nextOrder);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => {
          const isActive = sortKey === headCell.id;
          const sortable = headCell.sortable !== false;
          return (
            <StyledHeaderCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              sortDirection={sortable && isActive ? order : false}
            >
              {sortable ? (
                <TableSortLabel
                  active={isActive}
                  direction={isActive ? order : "asc"}
                  onClick={(event) => handleRequestSort(event, headCell.id)}
                >
                  {headCell.label}
                </TableSortLabel>
              ) : (
                headCell.label
              )}
            </StyledHeaderCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default AdvocatesTableHeader;

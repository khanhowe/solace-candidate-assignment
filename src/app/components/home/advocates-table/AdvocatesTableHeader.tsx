import {
  styled,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { Advocate } from "../../../api/advocates/types";

const StyledHeaderCell = styled(TableCell)({
  fontWeight: "bold",
});

interface AdvocatesTableHeaderProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Advocate
  ) => void;
  order: Order;
  orderBy: keyof Advocate;
}

interface HeadCell {
  id: keyof Advocate;
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

const AdvocatesTableHeader: React.FC<AdvocatesTableHeaderProps> = ({
  onRequestSort,
  order,
  orderBy,
}) => {
  const createSortHandler =
    (property: keyof Advocate) => (event: React.MouseEvent<unknown>) =>
      onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => {
          const isActive = orderBy === headCell.id;
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
                  onClick={createSortHandler(headCell.id)}
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

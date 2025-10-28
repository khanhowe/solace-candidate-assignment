import { TableBody, TableCell, TableRow } from "@mui/material";
import { Advocate } from "../../../api/advocates/types";

interface AdvocatesTableBodyProps {
  visibleRows: Advocate[];
}

const AdvocatesTableBody: React.FC<AdvocatesTableBodyProps> = ({
  visibleRows,
}) => {
  return (
    <TableBody>
      {visibleRows.map((advocate: Advocate) => {
        return (
          <TableRow key={advocate.id}>
            <TableCell>{advocate.firstName}</TableCell>
            <TableCell>{advocate.lastName}</TableCell>
            <TableCell>{advocate.city}</TableCell>
            <TableCell>{advocate.degree}</TableCell>
            <TableCell>{advocate.specialties.join(", ")}</TableCell>
            <TableCell align="right">{advocate.yearsOfExperience}</TableCell>
            <TableCell align="right">{advocate.phoneNumber}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default AdvocatesTableBody;

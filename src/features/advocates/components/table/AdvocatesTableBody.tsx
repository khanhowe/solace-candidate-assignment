import { TableBody, TableCell, TableRow } from "@mui/material";
import { Advocate } from "@/shared/lib/types";
import { formatPhoneNumber } from "../../lib/formatPhoneNumber";
import { useSearch } from "../../hooks/useSearch";

const AdvocatesTableBody: React.FC = () => {
  const { advocates } = useSearch();
  return (
    <TableBody>
      {advocates.map((advocate: Advocate) => {
        return (
          <TableRow key={advocate.id}>
            <TableCell>{advocate.firstName}</TableCell>
            <TableCell>{advocate.lastName}</TableCell>
            <TableCell>{advocate.city}</TableCell>
            <TableCell>{advocate.degree}</TableCell>
            <TableCell>{advocate.specialties.join(", ")}</TableCell>
            <TableCell align="right">{advocate.yearsOfExperience}</TableCell>
            <TableCell align="right">
              {formatPhoneNumber(advocate.phoneNumber)}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default AdvocatesTableBody;

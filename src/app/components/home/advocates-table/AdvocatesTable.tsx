import { Table, TableContainer, TablePagination } from "@mui/material";
import { Advocate } from "../../../api/advocates/types";
import AdvocatesTableHeader from "./AdvocatesTableHeader";
import { useMemo, useState } from "react";
import { getComparator } from "./getComparator";
import AdvocatesTableBody from "./AdvocatesTableBody";

interface AdvocatesTableProps {
  filteredAdvocates: Advocate[];
}

const AdvocatesTable: React.FC<AdvocatesTableProps> = ({
  filteredAdvocates,
}) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Advocate>("lastName");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof Advocate
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = useMemo(
    () =>
      [...filteredAdvocates]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, filteredAdvocates]
  );

  return (
    <TableContainer>
      <Table>
        <colgroup>
          <col style={{ width: "12%" }} />
          <col style={{ width: "12%" }} />
          <col style={{ width: "14%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "32%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "10%" }} />
        </colgroup>
        <AdvocatesTableHeader
          onRequestSort={handleRequestSort}
          order={order}
          orderBy={orderBy}
        />
        <AdvocatesTableBody visibleRows={visibleRows} />
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredAdvocates.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default AdvocatesTable;

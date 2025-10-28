"use client";

import { CircularProgress, Table, TableContainer } from "@mui/material";
import AdvocatesTableHeader from "./AdvocatesTableHeader";
import AdvocatesTableBody from "./AdvocatesTableBody";
import styled from "@emotion/styled";
import { useSearch } from "../../hooks/useSearch";
import Paginator from "./Paginator";

const TableContainerStyled = styled(TableContainer)({
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
});

const ColGroupSizing = (
  <colgroup>
    <col style={{ width: "12%" }} />
    <col style={{ width: "12%" }} />
    <col style={{ width: "14%" }} />
    <col style={{ width: "10%" }} />
    <col style={{ width: "32%" }} />
    <col style={{ width: "10%" }} />
    <col style={{ width: "10%" }} />
  </colgroup>
);

const AdvocatesTable: React.FC = () => {
  const { loading } = useSearch();

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <TableContainerStyled>
      <Table>
        {ColGroupSizing}
        <AdvocatesTableHeader />
        <AdvocatesTableBody />
      </Table>
      <Paginator />
    </TableContainerStyled>
  );
};

export default AdvocatesTable;

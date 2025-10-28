"use client";

import React, { useEffect, useState } from "react";
import { Advocate, SortKey } from "./api/advocates/types";
import Header from "./components/layout/Header";
import Search from "./components/home/Search";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import AdvocatesTable from "./components/home/advocates-table/AdvocatesTable";
import { SearchProvider } from "./context/SearchProvider";

const HomeContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "24px",
  gap: "24px",
});

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <SearchProvider>
        <Search />
        <AdvocatesTable />
      </SearchProvider>
    </HomeContainer>
  );
};

export default Home;

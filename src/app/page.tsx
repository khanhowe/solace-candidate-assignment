import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Header from "@/shared/components/Header";
import Search from "@/features/advocates/components/Search";
import { AdvocatesTable } from "@/features/advocates/components/table";

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
      <Search />
      <AdvocatesTable />
    </HomeContainer>
  );
};

export default Home;

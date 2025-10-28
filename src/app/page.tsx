"use client";

import React, { useEffect, useState } from "react";
import { Advocate } from "./api/advocates/types";
import Header from "./components/layout/Header";
import Search from "./components/home/Search";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import AdvocatesTable from "./components/home/advocates-table/AdvocatesTable";

const HomeContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "24px",
  gap: "24px",
});

const Home: React.FC = () => {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchClear = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  // const onChange = (e) => {
  //   const searchTerm = e.target.value;

  //   document.getElementById("search-term").innerHTML = searchTerm;

  //   console.log("filtering advocates...");
  //   const filteredAdvocates = advocates.filter((advocate) => {
  //     return (
  //       advocate.firstName.includes(searchTerm) ||
  //       advocate.lastName.includes(searchTerm) ||
  //       advocate.city.includes(searchTerm) ||
  //       advocate.degree.includes(searchTerm) ||
  //       advocate.specialties.includes(searchTerm) ||
  //       advocate.yearsOfExperience.includes(searchTerm)
  //     );
  //   });

  //   setFilteredAdvocates(filteredAdvocates);
  // };

  // const onClick = () => {
  //   console.log(advocates);
  //   setFilteredAdvocates(advocates);
  // };

  return (
    <HomeContainer>
      <Header />
      <Search
        onChange={onChange}
        searchClear={handleSearchClear}
        value={searchTerm}
      />
      <AdvocatesTable filteredAdvocates={filteredAdvocates} />
    </HomeContainer>
  );
};

export default Home;

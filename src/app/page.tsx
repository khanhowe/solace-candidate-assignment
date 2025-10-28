import React from "react";
import Header from "@/shared/components/Header";
import Search from "@/features/advocates/components/Search";
import { AdvocatesTable } from "@/features/advocates/components/table";

const Home: React.FC = () => {
  return (
    <main className="home-container">
      <Header />
      <Search />
      <AdvocatesTable />
    </main>
  );
};

export default Home;

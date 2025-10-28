"use client";

import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import SolaceLogo from "./SolaceLogo";

const HeaderContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "16px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
});

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <SolaceLogo />
      <Typography variant="h6" component="h1">
        Advocates
      </Typography>
    </HeaderContainer>
  );
};

export default Header;

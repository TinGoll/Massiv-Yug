import { Link } from "gatsby";
import React from "react";
import { Logo } from "../../../../assets/icons";
import { Box, Typography, styled } from "@mui/material";

const LogoTitle = styled(Typography)`
  color: #fff;
  font-family: Orchidea Pro;
  font-size: 29px;
  font-style: normal;
  font-weight: 600;
  line-height: 133%; /* 38.57px */
  letter-spacing: -0.58px;
  text-transform: uppercase;
`;

const LogoSubtitle = styled(Typography)`
  color: rgba(255, 255, 255, 0.78);
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 133%; /* 15.96px */
`;

const HeaderLogo = () => {
  return (
    <Link to="/">
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Logo />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <LogoTitle>Массив-юг</LogoTitle>
          <LogoSubtitle>от идеи до воплощения в каждой мелочи</LogoSubtitle>
        </Box>
      </Box>
    </Link>
  );
};

export default HeaderLogo;

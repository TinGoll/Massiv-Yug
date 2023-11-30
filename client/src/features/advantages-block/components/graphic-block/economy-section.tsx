import { Box, styled, alpha } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Container = styled(Box)`
  position: relative;
  width: 322px;
  height: 432px;
  background-color: ${alpha("#fff", 0.14)};
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const EconomySection: React.FC = () => {
  return (
    <Container>
      <StaticImage
        src="../../../../images/advantages/coins.png"
        alt="kitchen"
      />
    </Container>
  );
};

export default EconomySection;

import { Box, styled } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Container = styled(Box)`
  position: relative;
  width: 322px;
  height: 432px;
  border-radius: 160px;
  background: #656565;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    width: 146px;
    height: 196px;
    border-radius: 148px;
  }
`;

const ImgBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DeliverySection: React.FC = () => {
  return (
    <Container>
      <ImgBox>
        <StaticImage
          src="../../../../images/advantages/myug-car.png"
          alt="kitchen"
        />
      </ImgBox>
    </Container>
  );
};

export default DeliverySection;

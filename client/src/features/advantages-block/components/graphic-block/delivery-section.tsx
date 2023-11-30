import { Box, styled } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Container = styled(Box)`
  position: relative;
  width: 322px;
  height: 432px;
  border-radius: 0px 200px 200px 0px;
  background: #656565;
`;

const ImgBox = styled(Box)`
  width: 447px;
  height: 372px;
  img {
    position: absolute;
    top: 30px;
    left: 0;
  }
`;

const DeliverySection: React.FC = () => {
  return (
    <Container>
      <ImgBox>
        <StaticImage
          objectFit="cover"
          src="../../../../images/advantages/myug-car.png"
          alt="kitchen"
        />
      </ImgBox>
    </Container>
  );
};

export default DeliverySection;

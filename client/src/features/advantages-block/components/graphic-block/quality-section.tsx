import { Box, styled } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ImageContainer = styled(Box)`
  position: relative;
  width: 322px;
  height: 432px;
  background-color: ${({ theme }) => theme.colors.light.primary};
`;

const ImgBox = styled(Box)`
  width: 322px;
  height: 432px;
  overflow: hidden;
  img {
    width: auto;
    height: 432px;
    position: absolute;
    top: 20px;
    left: 0;
  }
`;

const QualitySection: React.FC = () => {
  return (
    <ImageContainer>
      <ImgBox>
        <StaticImage
          objectFit="cover"
          src="../../../../images/advantages/kitchen.png"
          alt="kitchen"
        />
      </ImgBox>
    </ImageContainer>
  );
};

export default QualitySection;

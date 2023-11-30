import { Box, styled } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ImageContainer = styled(Box)`
  position: relative;
  width: 322px;
  height: 432px;
  background-color: ${({ theme }) => theme.colors.light.primary};
  border-radius: 160px;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    width: 146px;
    height: 196px;
    border-radius: 148px;
  }
`;

const ImgBox = styled(Box)`
  position: absolute;
  top: 20px;
  left: 0;
  width: 550px;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    width: 246px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const QualitySection: React.FC = () => {
  return (
    <ImageContainer>
      <ImgBox>
        <StaticImage
          src="../../../../images/advantages/kitchen.png"
          alt="kitchen"
        />
      </ImgBox>
    </ImageContainer>
  );
};

export default QualitySection;

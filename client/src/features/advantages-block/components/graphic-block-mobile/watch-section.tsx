import { Box, styled } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ImageContainer = styled(Box)`
  width: 322px;
  height: 432px;
  position: relative;
  background: #ffc099;
  border-radius: 160px;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    width: 146.328px;
    height: 195.48px;
    border-radius: 147.458px;
  }
`;

const WatchBox = styled(Box)`
  width: 100%;
  height: 100%;
  background: none transparent;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 24px;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    padding: 0%;
  }
  img {
    width: 166px;
    height: auto;
    object-fit: cover;
    ${({ theme }) => theme.breakpoints.down("tablet")} {
      width: 116px;
    }
  }
`;

const ImgBox = styled(Box)`
  width: 100%;
  height: 100%;
  background: none transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const WatchSection = () => {
  return (
    <ImageContainer>
      <ImgBox>
        <StaticImage
          src="../../../../images/advantages/boxes.png"
          alt="boxes"
        />
      </ImgBox>
      <WatchBox>
        <StaticImage
          src="../../../../images/advantages/watch.png"
          alt="watch"
        />
      </WatchBox>
    </ImageContainer>
  );
};

export default WatchSection;

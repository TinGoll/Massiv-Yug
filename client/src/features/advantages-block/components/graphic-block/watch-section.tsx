import { Box, styled } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ImageContainer = styled(Box)`
  width: 322px;
  height: 432px;
  position: relative;
  border-radius: 200px 0px 0px 200px;
  background: #ffc099;
`;

const WatchBox = styled(Box)`
  width: 306px;
  height: 306px;
  background: none transparent;
  position: absolute;
  bottom: calc(-50% + 30px);
  left: 50px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ImgBox = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
  background: none transparent;
  overflow: hidden;
  img {
    width: 540px;
    height: 540px;
    position: absolute;
    top: calc(-50% + 200px);
    left: -100px;
  }
`;

const WatchSection = () => {
  return (
    <ImageContainer>
      <ImgBox>
        <StaticImage
          objectFit="cover"
          src="../../../../images/advantages/boxes.png"
          alt="boxes"
        />
      </ImgBox>
      <WatchBox>
        <StaticImage
          objectFit="cover"
          src="../../../../images/advantages/watch.png"
          alt="watch"
        />
      </WatchBox>
    </ImageContainer>
  );
};

export default WatchSection;

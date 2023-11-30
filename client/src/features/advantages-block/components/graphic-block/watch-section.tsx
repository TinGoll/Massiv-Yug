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

const ImgBox = styled("div")`
  width: 100%;
  height: 100%;
  background: none transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    scale: 1.1;
  }
`;

const WatchBox = styled("div")`
  width: 260px;
  height: 260px;
  position: absolute;
  bottom: 0;
  left: -50%;
  transform: translate(50%, 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

// const ImgBox = styled(Box)`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   background: none transparent;
//   overflow: hidden;
//   img {
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//   }
// `;

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
      {/* <ImgBox>
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
      </WatchBox> */}
    </ImageContainer>
  );
};

export default WatchSection;

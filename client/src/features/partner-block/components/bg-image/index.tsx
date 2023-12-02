import { styled } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "./bg-image.module.css";

const Container = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: -1;
`;

const BgImage = () => {
  return (
    <Container>
      <StaticImage
        className={styles.image}
        src="../../../../images/partner-block/bg.png"
        alt="Партнерам"
      />
    </Container>
  );
};

export default BgImage;

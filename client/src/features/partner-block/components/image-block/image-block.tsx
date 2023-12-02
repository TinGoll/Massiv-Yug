import { SxProps, styled } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "./image-block.module.css";

const Container = styled("div")`
  position: relative;
`;

const ImageBox = styled("div")`
  width: 298px;
  height: 298px;
  border-radius: 50%;
  overflow: hidden;
  @media (min-width: 527px) {
    width: 398px;
    height: 398px;
  }
`;

const IconBox = styled("div")`
  position: absolute;
  left: 0;
  bottom: 0;
  @media (max-width: 527px) {
    width: 50%;
    height: 50%;
  }
`;

const ImageBlock: React.FC<Props> = (props) => {
  return (
    <Container {...props}>
      <ImageBox>
        <StaticImage
          className={styles.image}
          src="../../../../images/partner-block/workers.png"
          alt="Workers"
        />
      </ImageBox>

      <IconBox>
        <StaticImage src="../../../../assets/png/logo_orange.png" alt="Logo" />
      </IconBox>
    </Container>
  );
};

export default ImageBlock;
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sx?: SxProps;
}

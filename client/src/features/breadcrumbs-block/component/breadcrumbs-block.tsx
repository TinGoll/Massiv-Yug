import React from "react";
import { Block } from "../../../components";
import { Container, Theme, useMediaQuery } from "@mui/material";
import BreadcrumbsComp from "../../../components/breadcrumbs-comp/breadcrumbs-comp";

const BreadcrumbsBlock: React.FC<Props> = ({ adress, links }) => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("tablet")
  );

  return (
    <Block
      id={`breadcrumbsBlock:${adress}`}
      sx={{
        display: "grid",
        justifyItems: "center",
      }}
    >
      <Container maxWidth="desktop">
        <BreadcrumbsComp
          sx={{
            marginTop: isMobile ? "25px" : "33px",
            marginBottom: isMobile ? "25px" : "50px",
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
          adress={adress}
          links={links}
        />
      </Container>
    </Block>
  );
};

export default BreadcrumbsBlock;

interface Props {
  adress: string[];
  links?: string[];
}

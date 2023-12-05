import React from "react";
import { Block } from "../../../components";
import { Container, Theme, useMediaQuery } from "@mui/material";
import BreadcrumbsComp from "../../../components/breadcrumbs-comp/breadcrumbs-comp";

const BreadcrumbsBlock: React.FC<Props> = ({ adress, links }) => {
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
            marginTop: {
              mobile: "25px",
              tablet: "50px",
            },
            marginBottom: {
              mobile: "25px",
              tablet: "50px",
            },
            display: "flex",
            justifyContent: {
              mobile: "center",
              tablet: "flex-start",
            },
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

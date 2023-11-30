import { Box, Container, styled } from "@mui/material";
import React from "react";
import WatchSection from "./watch-section";
import QualitySection from "./quality-section";
import EconomySection from "./economy-section";
import DeliverySection from "./delivery-section";
import TextCard from "../text-card/text-card";
import { graphicText } from "../../constants/graphic-text";

const BlockContainer = styled("div")`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  ${({ theme }) => theme.breakpoints.down("desktop")} {
    display: none;
  }
`;

const GraphicBlock = () => {
  return (
    <Container maxWidth="desktop" sx={{ color: "white" }}>
      <BlockContainer>
        <Box>
          <WatchSection />
          <TextCard {...graphicText[0]} />
        </Box>
        <Box>
          <QualitySection />
          <TextCard {...graphicText[1]} />
        </Box>
        <Box>
          <EconomySection />
          <TextCard {...graphicText[2]} />
        </Box>
        <Box>
          <DeliverySection />
          <TextCard {...graphicText[3]} />
        </Box>
      </BlockContainer>
    </Container>
  );
};

export default GraphicBlock;

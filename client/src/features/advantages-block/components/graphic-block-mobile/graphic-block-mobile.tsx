import { Container, Typography, styled } from "@mui/material";
import React from "react";
import DeliverySection from "./delivery-section";
import WatchSection from "./watch-section";
import QualitySection from "./quality-section";
import EconomySection from "./economy-section";
import { graphicText } from "../../constants/graphic-text";

const BlockContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  justify-content: flex-start;
  align-items: center;
  ${({ theme }) => theme.breakpoints.up("desktop")} {
    display: none;
  }
`;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled("p")`
  color: #fff;
  text-align: center;
  font-family: Orchidea Pro;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 133%;
  letter-spacing: -0.52px;
  margin-top: 20px;
`;

const Text = styled("p")`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 152.5%; /* 22.875px */
  margin-top: 12px;
  ${({ theme }) => theme.breakpoints.up("tablet")} {
    text-align: center;
    max-width: 450px;
  }
`;

const GraphicBlockMobile = () => {
  return (
    <BlockContainer maxWidth="desktop">
      <Typography >
        
      </Typography>
      <Wrapper>
        <WatchSection />
        <div>
          <Title>{graphicText[0].title}</Title>
          <Text>{graphicText[0].text}</Text>
        </div>
      </Wrapper>
      <Wrapper>
        <QualitySection />
        <div>
          <Title>{graphicText[1].title}</Title>
          <Text>{graphicText[1].text}</Text>
        </div>
      </Wrapper>

      <Wrapper>
        <EconomySection />
        <div>
          <Title>{graphicText[2].title}</Title>
          <Text>{graphicText[2].text}</Text>
        </div>
      </Wrapper>

      <Wrapper>
        <DeliverySection />
        <div>
          <Title>{graphicText[3].title}</Title>
          <Text>{graphicText[3].text}</Text>
        </div>
      </Wrapper>
    </BlockContainer>
  );
};

export default GraphicBlockMobile;

import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Container = styled(Box)`
  width: 100%;
  margin-top: 54px;
`;
const CardTitle = styled(Typography)`
  color: #fff;
  font-family: Orchidea Pro;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 133%;
  letter-spacing: -0.52px;
  margin: 0;
`;
const CardText = styled(Typography)`
  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 152.5%; /* 25.925px */
  margin: 0;
  margin-top: 18px;
  max-width: 80%;
`;

const TextCard: React.FC<Props> = ({ title, text }) => {
  return (
    <Container>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </Container>
  );
};

export default TextCard;
interface Props {
  title: string;
  text: string;
}

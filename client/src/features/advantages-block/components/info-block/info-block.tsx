import { Typography, styled } from "@mui/material";
import React from "react";

const Container = styled("div")`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 20px;
`;
const Text = styled(Typography)`
  color: #fff;
  font-family: Orchidea Pro;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 133%;
  letter-spacing: -0.48px;
  min-width: 400px;
  flex: 1;
`;

const Orange = styled("span")`
  color: ${({ theme }) => theme.colors.light.tertiary};
`;

const OrangeDoubleLine = styled("span")`
  color: ${({ theme }) => theme.colors.light.tertiary};
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: white;
  text-underline-offset: 4px;
`;

const InfoBlock: React.FC = () => {
  return (
    <>
      <Container>
        <Text>
          Став одним из наших клиентов,{" "}
          <Orange>Вы доверяете профессионалам</Orange>, которые доведут дело до
          безупречного результата!
        </Text>
        <Text>
          Именно <Orange> Вы выбираете эксклюзив</Orange>, обладаете{" "}
          <Orange> прекрасным вкусом</Orange> и{" "}
          <OrangeDoubleLine> подчеркиваете</OrangeDoubleLine>{" "}
          <Orange> свою уникальность</Orange> во всем! Знаете, чего хотите и
          достойны только лучшего!
        </Text>
      </Container>
      <Typography
        sx={{
          color: "white",
          textAlign: "center",
          fontFamily: "Orchidea Pro",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "133%",
          letterSpacing: "-0.64px",
          mt: "36px",
        }}
      >
        Вы, так же, как и многие уже готовы выбрать нас, потому что: 
      </Typography>
    </>
  );
};

export default InfoBlock;

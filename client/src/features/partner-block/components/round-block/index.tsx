import { Box, styled, BoxProps, Container } from "@mui/material";
import React from "react";
import BgImage from "../bg-image";
import { HeaderBlock, RoundButton, TitleBlock } from "../../../../components";
import constants from "../../constants";
import TextBlock from "../text-block";
import ImageBlock from "../image-block/image-block";

const RoundContainer = styled(Box)`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 36px;
  @media (min-width: 1527px) {
    height: 882px;
    border-radius: 5000px;
    padding-bottom: 0;
  }
`;

const ButtonContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding-left: 28px;
  button {
    min-width: 232px;
  }
  ${({ theme }) => theme.breakpoints.down("laptop")} {
    margin-top: 36px;
  }

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    button {
      min-width: 100%;
    }
  }
`;

const InfoContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  margin-top: 48px;
  ${({ theme }) => theme.breakpoints.down("laptop")} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 36px;
  }
`;

const RoundBlock: React.FC<Props> = ({ ...props }) => {
  return (
    <RoundContainer {...props}>
      <BgImage />
      <Container maxWidth="desktop">
        <Box sx={{ mt: 4 }}>
          <HeaderBlock darkTheme number={4} text="Партнерам" />
          <TitleBlock
            mt={4}
            sx={{
              color: "white",
            }}
          >
            Ищите надежного партнера?
          </TitleBlock>
        </Box>

        <InfoContainer>
          <TextBlock sx={{ flex: 1, pr: 2 }} />
          <ImageBlock />
        </InfoContainer>

        <ButtonContainer>
          <RoundButton height={100}>{constants.buttonText}</RoundButton>
        </ButtonContainer>
      </Container>
    </RoundContainer>
  );
};

export default RoundBlock;

type Props = BoxProps;

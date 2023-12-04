import React from "react";
import { Block, HeaderBlock, Offset, TitleBlock } from "../../components";
import BgIcon from "./components/bg-icon/bg-icon";
import { Box, Container } from "@mui/material";
import InfoBlock from "./components/info-block/info-block";
import GraphicBlock from "./components/graphic-block/graphic-block";
import GraphicBlockMobile from "./components/graphic-block-mobile/graphic-block-mobile";

const AdvantagesBlock: React.FC = () => {
  return (
    <Block id="02">
      <Offset />
      <Box
        sx={(theme) => ({
          bgcolor: theme.colors.light.secondary,
          overflow: "hidden",
          paddingTop: "37px",
        })}
      >
        <Container maxWidth="desktop" sx={{ position: "relative" }}>
        <HeaderBlock darkTheme number={2} text="Преимущества" />
          <BgIcon />
          <TitleBlock
            mt={4}
            sx={{
              color: "white",
            }}
          >
            Почему вы?
          </TitleBlock>
          <InfoBlock />
        </Container>
        <GraphicBlock />
        <GraphicBlockMobile />
        <Offset />
      </Box>
    </Block>
  );
};

export default AdvantagesBlock;

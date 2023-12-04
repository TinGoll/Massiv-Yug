import React, { useState } from "react";
import { Block, HeaderBlock, Offset, RoundButton } from "../../components";
import { Box, Container, Theme, useMediaQuery } from "@mui/material";
import ActionButtons from "./components/action-buttons";
import { buttonsList } from "./constants/buttons-list";
import TextBlock from "./components/text-block/text-block";
import Carousel from "./components/carousel/carousel";

const CarouselBlock: React.FC = () => {
  const [category, setCategory] = useState<string>(() => buttonsList[0].value);
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("tablet")
  );
  return (
    <Block id="01">
      <Offset />
      <Container maxWidth="desktop">
        <HeaderBlock number={1} text="Продукция" />
        <TextBlock />
        <ActionButtons
          value={category}
          setValue={setCategory}
          list={buttonsList}
        />
        <Carousel category={category} />
        <Box sx={{ display: "flex", justifyContent: "center", mt: "60px" }}>
          <RoundButton
            height={isMobile ? 86 : 100}
            sx={{
              width: isMobile ? "100%" : 280,
            }}
          >
            Смотреть еще
          </RoundButton>
        </Box>
      </Container>
    </Block>
  );
};

export default CarouselBlock;

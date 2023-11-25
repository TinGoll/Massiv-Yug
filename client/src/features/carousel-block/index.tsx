import React, { useState } from "react";
import { Block, HeaderBlock, Offset } from "../../components";
import { Container } from "@mui/material";
import ActionButtons from "./components/action-buttons";
import { buttonsList } from "./constants/buttons-list";
import TextBlock from "./components/text-block/text-block";
import Carousel from "./components/carousel/carousel";

const CarouselBlock = () => {
  const [category, setCategory] = useState<string>(() => buttonsList[0].value);
  return (
    <Block id="01">
      <Offset />
      <HeaderBlock number={1} text="Продукция" />
      <Container maxWidth="desktop">
        <TextBlock />
        <ActionButtons
          value={category}
          setValue={setCategory}
          list={buttonsList}
        />
        <Carousel category={category} />
      </Container>
    </Block>
  );
};

export default CarouselBlock;

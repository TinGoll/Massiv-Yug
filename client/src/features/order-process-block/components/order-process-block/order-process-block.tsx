import React from "react";
import {
  Block,
  HeaderBlock,
  Offset,
} from "../../../../components";
import TitleBlock from "../../../../components/title-block/title-block";
import CardsBlock from "../cards-block/cards-block";
import { Container, Theme, useMediaQuery } from "@mui/material";

const OrderProcessBlock = () => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("tablet")
  );

  const onClickSignUpForATour = (): void => {
    // клик на кнопке "Записаться на экскурсию"
  };

  return (
    <Block
      id="03"
      sx={{
        display: "grid",
        justifyItems: "center",
      }}
    >
      <Offset />
      <Container maxWidth="desktop">
        <HeaderBlock number={3} text={"Как мы работаем"} />
        <TitleBlock
          sx={{
            margin: {
              mobile: "25px",
              tablet: "45px",
            },
          }}
        >
          ПРОЦЕСС ЗАКАЗА
        </TitleBlock>
        <CardsBlock onClickFunc={onClickSignUpForATour} />
      </Container>
    </Block>
  );
};

export default OrderProcessBlock;

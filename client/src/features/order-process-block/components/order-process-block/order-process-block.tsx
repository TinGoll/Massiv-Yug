import React from "react";
import { Block, HeaderBlock, RoundButton } from "../../../../components";
import TitleBlock from "../../../../components/title-block/title-block";
import TextCard from "../../../../components/text-card/text-card";
import { arrayCardItems } from "../../constants/constants";
import Grid from "@mui/material/Grid";
import {
  Box,
  Container,
  Divider,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const OrderProcessBlock = () => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("tablet")
  );

  const onClickSignUpForATour = () => {
    // клик на кнопке "Записаться на экскурсию"
  };

  return (
    <Block
      id="3"
      sx={{
        display: "grid",
        justifyItems: "center",
      }}
    >
      <Container maxWidth="desktop">
        <HeaderBlock number={3} text={"Как мы работаем"}/>
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
        <Grid
          container
          display="grid"
          spacing={0}
          justifyItems="stretch"
          sx={{
            mt: {
              mobile: 2,
              tablet: 8,
            },
            gridTemplateColumns: {
              mobile: "1fr",
              tablet: "1fr 1fr 1fr",
            },
          }}
        >
          {arrayCardItems.map((item, index, array) => {
            return (
              <>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    borderRightStyle: {
                      mobile: "none",
                      tablet: (index + 1) % 3 === 0 ? "none" : "solid",
                    },
                    borderRightWidth: "1px",
                    borderRightColor: "#0000003D",
                    height: "100%",
                  }}
                >
                  <TextCard
                    {...item}
                    iconColorPrimary={index === array.length - 1}
                  >
                    {item.text}

                    {index === array.length - 1 && (
                      <RoundButton
                        onClick={onClickSignUpForATour}
                        height={isMobile ? 86 : 100}
                        sx={{
                          width: "100%",
                          marginTop: "16px",
                        }}
                      >
                        Записаться на экскурсию
                      </RoundButton>
                    )}
                  </TextCard>
                </Grid>

                {/* Array(3).map(() => {}) */}
                {(index + 1) % 3 == 0 && index != array.length - 1 && (
                  <>
                    <Grid
                      item
                      gridColumn="span 3"
                      sx={{
                        display: {
                          mobile: "none",
                          tablet: "initial",
                        },
                        marginTop: {
                          mobile: "0px",
                          tablet: "25px",
                        },
                        marginBottom: {
                          mobile: "0px",
                          tablet: "25px",
                        },
                      }}
                    >
                      <Divider />
                    </Grid>
                  </>
                )}
              </>
            );
          })}
        </Grid>
      </Container>
    </Block>
  );
};

export default OrderProcessBlock;

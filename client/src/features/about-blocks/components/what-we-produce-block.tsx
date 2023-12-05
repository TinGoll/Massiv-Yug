import React from "react";
import { Block, ImageLayout, TitleBlock } from "../../../components";
import {
  Box,
  Container,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import theme from "../../../theme/theme";

const WhatWeProduceBlock = () => {
  const isLaptop = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("laptop")
  );

  return (
    <Block
      id="ImagesBaner"
      sx={{
        display: "grid",
        justifyItems: "center",
      }}
    >
      <Container maxWidth="desktop">
        <TitleBlock
          sx={{
            marginBottom: {
              mobile: "26px",
              laptop: "43px",
            },
            textAlign: {
              mobile: "center",
              laptop: "start",
            },
          }}
        >
          Что мы производим
        </TitleBlock>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            gap: "30px",
            marginBottom: {
              mobile: "32px",
              laptop: "60px",
            },
            flexWrap: {
              mobile: "wrap",
              desktop: "nowrap",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
              flexBasis: {
                mobile: "40%",
                desktop: "25%",
              },
            }}
          >
            <ImageLayout
              width={isLaptop ? 155 : 297}
              height={isLaptop ? 230 : 437}
              
            >
              <StaticImage
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="../../../images/about-page/image9.png"
                alt="Запас ЧМЗ"
              />
            </ImageLayout>
            <Typography
              sx={{
                ...theme.typography.fontForItemsImage,
              }}
            >
              Мебель
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
              flexBasis: {
                mobile: "40%",
                desktop: "25%",
              },
            }}
          >
            <ImageLayout
              width={isLaptop ? 155 : 297}
              height={isLaptop ? 230 : 437}
            >
              <StaticImage
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="../../../images/about-page/image10.png"
                alt="Запас ЧМЗ"
              />
            </ImageLayout>
            <Typography
              sx={{
                ...theme.typography.fontForItemsImage,
              }}
            >
              Фасады
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
              flexBasis: {
                mobile: "40%",
                desktop: "25%",
              },
            }}
          >
            <ImageLayout
              width={isLaptop ? 155 : 297}
              height={isLaptop ? 230 : 437}
            >
              <StaticImage
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="../../../images/about-page/image11.png"
                alt="Запас ЧМЗ"
              />
            </ImageLayout>
            <Typography
              sx={{
                ...theme.typography.fontForItemsImage,
              }}
            >
              Двери
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
              flexBasis: {
                mobile: "40%",
                desktop: "25%",
              },
            }}
          >
            <ImageLayout
              width={isLaptop ? 155 : 297}
              height={isLaptop ? 230 : 437}
            >
              <StaticImage
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="../../../images/about-page/image12.png"
                alt="Запас ЧМЗ"
              />
            </ImageLayout>
            <Typography
              sx={{
                ...theme.typography.fontForItemsImage,
              }}
            >
              Лестницы
            </Typography>
          </Box>
        </Box>
      </Container>
    </Block>
  );
};

export default WhatWeProduceBlock;

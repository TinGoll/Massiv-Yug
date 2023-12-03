import { Box, useTheme } from "@mui/material";
import React from "react";
import { ImageLayout } from "../../../../components";
import { Guarantee } from "../../../../assets/icons";
import BannerTitle from "./banner-title";
import BannerSubtitle from "./banner-subtitle";
import { StaticImage } from "gatsby-plugin-image";

const BannerInfoBlock: React.FC = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 6,
        paddingTop: {
          mobile: 0,
          laptop: "130px",
        },
        gap: {
          mobile: 4,
          laptop: 10,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "37px",
        }}
      >
        <Box
          sx={{
            display: {
              mobile: "none",
              laptop: "block",
            },
            padding: 0,
          }}
        >
          <ImageLayout
            width={180}
            height={270}
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <StaticImage
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src="../../../../images/banner/kitchen_banner.png"
              alt="Кухня Массив-юг"
            />
          </ImageLayout>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: 4,
            flexDirection: {
              mobile: "row",
              laptop: "column",
            },
            justifyContent: {
              mobile: "flex-start",
              laptop: "center",
            },
            alignItems: "center",
            gap: "25px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Guarantee />
            <BannerTitle
              sx={{
                position: "absolute",
                top: "calc(50% + 10px)",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "82px",
                fontWeight: 600,
              }}
            >
              7
            </BannerTitle>
          </Box>
          <BannerSubtitle
            sx={{
              maxWidth: {
                mobile: 240,
                laptop: 155,
              },
              textAlign: "center",
              fontSize: "15px",
            }}
          >
            Гарантия лет на каждое изделие
          </BannerSubtitle>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          gap: "25px",
          img: {
            width: "100%",
            minWidth: 100,
            height: "auto",
          },
        }}
      >
        <Box sx={{ maxWidth: 90 }}>
          <StaticImage
            src="../../../../assets/png/logo_orange.png"
            alt="Массив-юг"
          />
        </Box>
        <BannerSubtitle sx={{ fontSize: "15px", maxWidth: 240 }}>
          Вы экономите свое время, потому что мы используем только передовые
          технологии в производстве изделий
        </BannerSubtitle>
      </Box>
    </Box>
  );
};

export default BannerInfoBlock;

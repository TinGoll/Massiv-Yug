import React, { useCallback, useRef } from "react";
import {
  Block,
  ImageLayout,
  PrintedText,
  RoundButton,
} from "../../../../components";
import BannerSwiper from "../banner-swiper/banner-swiper";
import { SwiperRef } from "swiper/react";
import { Box, Container, Typography, styled } from "@mui/material";
import BannerMask from "../banner-mask/banner-mask";
import { banerList } from "../../constants/list";
import { StaticImage } from "gatsby-plugin-image";
import { Guarantee } from "../../../../assets/icons";

const Title = styled(Typography)`
  color: #fff;
  font-family: Orchidea Pro;
  font-style: normal;
  font-weight: 600;
  line-height: 133%; /* 68.794px */
  letter-spacing: -1.034px;
  text-transform: uppercase;
`;

const Subtitle = styled(Typography)`
  color: rgba(255, 255, 255, 0.78);
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 133%;
`;

const Banner: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const goToSlide = useCallback((slideIndex: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(slideIndex);
    }
  }, []);

  const handleTyping = useCallback(
    (item: string) => {
      const index = banerList.findIndex((value) => value === item);
      if (index < 0) {
        return;
      }
      const slideIndex = index;
      goToSlide(slideIndex);
    },
    [goToSlide]
  );

  return (
    <Block
      sx={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <BannerSwiper ref={swiperRef} />
      <BannerMask />
      <Container maxWidth="desktop" sx={{ position: "relative" }}>
        <Box
          display="grid"
          sx={{
            height: "100vh",
            gridTemplateColumns: {
              mobile: "1fr",
              laptop: "1fr auto",
            },
            gridTemplateRows: {
              mobile: "auto",
              laptop: "100%",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: "34px",
              justifyContent: "center",
              alignItems: {
                mobile: "center",
                laptop: "initial",
              },
            }}
          >
            <Box
              sx={{
                marginTop: {
                  mobile: "40%",
                  laptop: "initial",
                },
              }}
            >
              <Title
                variant="h1"
                sx={{
                  fontSize: {
                    mobile: "36px",
                    desktop: "50px",
                  },
                  textAlign: {
                    mobile: "center",
                    laptop: "left",
                  },
                }}
              >
                Вы получите{" "}
                <PrintedText
                  timeShow={3500}
                  list={banerList}
                  onStart={handleTyping}
                />
              </Title>
              <Title
                variant="h1"
                sx={{
                  fontSize: {
                    mobile: "36px",
                    desktop: "50px",
                  },
                  textAlign: {
                    mobile: "center",
                    laptop: "left",
                  },
                  maxWidth: {
                    mobile: "auto",
                    laptop: 670,
                  },
                }}
              >
                предвосхищающую все ожидания
              </Title>
              <Subtitle
                sx={{
                  textAlign: {
                    mobile: "center",
                    laptop: "left",
                  },
                  fontSize: {
                    mobile: "17px",
                    laptop: "18px",
                  },
                }}
              >
                до мельчайших подробностей!
              </Subtitle>
            </Box>
            <RoundButton
              height={100}
              sx={{
                fontWeight: 300,
                width: {
                  mobile: "100%",
                  laptop: 300,
                },
                maxWidth: 450,
              }}
            >
              Рассчитать стоимость
            </RoundButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: 6,
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
                  flexDirection: {
                    mobile: "row",
                    laptop: "column",
                  },
                  justifyContent: {
                    mobile: "flex-start",
                    laptop: "center",
                  },
                  alignItems: "center",
                  gap: "32px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 4,
                  }}
                >
                  <Guarantee />
                  <Title
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "82px",
                      fontWeight: 600,
                    }}
                  >
                    7
                  </Title>
                </Box>
                <Subtitle
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
                </Subtitle>
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
              <Subtitle sx={{ fontSize: "15px", maxWidth: 240 }}>
                Вы экономите свое время, потому что мы используем только
                передовые технологии в производстве изделий
              </Subtitle>
            </Box>
          </Box>
        </Box>
      </Container>
    </Block>
  );
};

export default Banner;

import React, { useCallback, useRef } from "react";
import { Block } from "../../../../components";
import BannerSwiper from "../banner-swiper/banner-swiper";
import { SwiperRef } from "swiper/react";
import { Box, Container } from "@mui/material";
import BannerMask from "../banner-mask/banner-mask";
import { banerList } from "../../constants/list";
import BannerActionBlock from "./banner-action-block";
import BannerInfoBlock from "./banner-info-block";

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
          <BannerActionBlock typingStatus={handleTyping} />
          <BannerInfoBlock />
        </Box>
      </Container>
    </Block>
  );
};

export default Banner;

import React, { forwardRef, memo, useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import * as styles from "./banner-swiper.module.css";

import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade } from "swiper/modules";
import { StaticImage } from "gatsby-plugin-image";

const BannerSwiper = forwardRef<SwiperRef>((props, ref) => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        ref={ref}
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade]}
        className={styles.swiper}
        speed={1500}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <StaticImage
            className={styles.swiperImage}
            src="../../../../images/banner/kitchen.png"
            alt="Кухни из массива"
            quality={95}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <StaticImage
            className={styles.swiperImage}
            src="../../../../images/banner/doors.jpg"
            alt="Двери из массива"
            quality={95}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <StaticImage
            className={styles.swiperImage}
            src="../../../../images/banner/furniture.jpg"
            alt="Мебель из массива"
            quality={95}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <StaticImage
            className={styles.swiperImage}
            src="../../../../images/banner/stairs.jpg"
            alt="Лестницы из массива"
            quality={95}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
});

export default memo(BannerSwiper);

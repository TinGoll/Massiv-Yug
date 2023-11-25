import React, { memo } from "react";
// import Swiper core and required modules
import { Mousewheel, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./carousel.module.css";
import "swiper/css";
import { ImageLayout } from "../../../../components";

// Временно, пока нет сервера.
const variannts = [
  "/images/classic1.jpg",
  "/images/classic2.jpg",
  "/images/modern.jpg",
  "/images/neoberta.jpg",
  "/images/portafino.jpg",
  "/images/jaluzi.jpg",
  "/images/florencia.jpg",
  "/images/flora.jpg",
];

const Сarousel: React.FC<Props> = ({ category }) => {
  return (
    <Swiper
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      slidesPerView={"auto"}
      // centeredSlides={true}
      speed={200}
      spaceBetween={30}
      direction="horizontal"
      mousewheel={true}
      loop={true}
      modules={[Mousewheel, Autoplay]}
      className={styles.swiper}
    >
      {Array(10)
        .fill((i: any) => i)
        .map(() => variannts[Math.floor(Math.random() * variannts.length)])
        .map((item, i) => {
          return (
            <SwiperSlide key={i} className={styles.slide}>
              <ImageLayout height={358} width={236}>
                <img src={item} alt={item} />
              </ImageLayout>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default memo(Сarousel);
interface Props {
  category: string;
}

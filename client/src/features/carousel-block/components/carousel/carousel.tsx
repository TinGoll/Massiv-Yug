import React, { memo } from "react";
// import Swiper core and required modules
import { Mousewheel, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./carousel.module.css";
import "swiper/css";
import { ImageLayout } from "../../../../components";

const variannts = [
  "/images/doors.jpg",
  "/images/furniture.jpg",
  "/images/stairs.jpg",
];

const Сarousel: React.FC<Props> = ({ category }) => {
  return (
    <Swiper
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      slidesPerView={5}
      spaceBetween={20}
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
              <ImageLayout height={300} width={200}>
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

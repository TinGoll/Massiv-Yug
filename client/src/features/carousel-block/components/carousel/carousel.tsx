import React, { memo } from "react";
// import Swiper core and required modules
import { Mousewheel, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./carousel.module.css";
import "swiper/css";
import { ImageLayout } from "../../../../components";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Временно, пока нет сервера.
const variannts = [
  { src: "/images/classic1.jpg", name: "Классика" },
  { src: "/images/classic2.jpg", name: "Классика" },
  { src: "/images/modern.jpg", name: "Модерн" },
  { src: "/images/neoberta.jpg", name: "Необерта" },
  { src: "/images/portafino.jpg", name: "Портафино" },
  { src: "/images/jaluzi.jpg", name: "Жалюзи" },
  { src: "/images/florencia.jpg", name: "Флоренция" },
  { src: "/images/flora.jpg", name: "Флора" },
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
      {Array(30)
        .fill((i: any) => i)
        .map(() => variannts[Math.floor(Math.random() * variannts.length)])
        .map((item, i) => {
          return (
            <SwiperSlide key={i} className={styles.slide}>
              <motion.div
                whileHover={{ y: -6 }}
                style={{
                  marginTop: 10,
                  width: "100%",
                  height: "100%",
                  transition: "0.2s ease-out",
                  cursor: "pointer",
                }}
              >
                <ImageLayout height={358} width={236}>
                  <img src={item.src} alt={item.name} />
                </ImageLayout>
              </motion.div>
              <Typography textAlign="center" fontWeight={600} mt={3}>
                {item.name}
              </Typography>
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

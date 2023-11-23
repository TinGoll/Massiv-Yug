import React from "react";
import { Theme, useMediaQuery, useTheme } from "@mui/material";
import * as styles from "./banner-mask.module.css";

const BannerMask = () => {
  const isTable = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("laptop")
  );
  return (
    <div
      className={`${styles.block} ${styles.bg} ${
        isTable ? "" : styles.inverted
      }`}
    ></div>
  );
};

export default BannerMask;

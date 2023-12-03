import React, { useEffect, useState } from "react";
import { Theme, useMediaQuery, useTheme } from "@mui/material";
import * as styles from "./banner-mask.module.css";

const BannerMask = () => {
  const [disableMask, setDisableMask] = useState(true);
  const isTable = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("laptop")
  );
  useEffect(() => {
    setDisableMask(isTable);
  }, [isTable]);
  return (
    <div
      className={`${styles.block} ${styles.bg} ${
        disableMask ? "" : styles.inverted
      }`}
    />
  );
};

export default BannerMask;

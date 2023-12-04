import { Box, BoxProps, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const ImageLayout: React.FC<Props> = ({
  width,
  height,
  sx,
  rectangle,
  ...props
}) => {
  const calculateRadius = () => {
    if (rectangle) {
      return 40;
    } else {
      return Math.min(Number(width), Number(height)) / 2;
    }
  };

  const radius = calculateRadius();
  return (
    <Box
      sx={[
        {
          borderRadius: `${radius}px`,
          width,
          height,
          overflow: "hidden",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default ImageLayout;
interface Props extends BoxProps {
  rectangle?: boolean;
}

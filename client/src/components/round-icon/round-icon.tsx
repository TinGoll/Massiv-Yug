import { Box, BoxProps, useTheme } from "@mui/material";
import React from "react";

const RoundIcon: React.FC<Props> = ({ color = "secondary", sx, ...props }) => {
  const theme = useTheme();
  return (
    <Box
      sx={[
        {
          width: 70,
          height: 70,
          bgcolor: theme.colors.light[color],
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: theme.palette.common.white,
          "& svg": {
            width: 34,
            height: 34,
            fill: theme.palette.common.white,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default RoundIcon;
interface Props extends BoxProps {
  color?: "secondary" | "tertiary" | "primary";
}

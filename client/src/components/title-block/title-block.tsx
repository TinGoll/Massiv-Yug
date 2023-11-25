import { Typography, TypographyProps } from "@mui/material";
import React  from "react";

type Props = TypographyProps;

const TitleBlock: React.FC<Props> = ({children, sx }) => {
  return (
    <Typography
      variant="h2"
      sx={[
        (theme) => ({
          ...theme.typography.title,
          textAlign: "center",
          fontSize: {
            mobile: "26px",
            tablet: "55px",
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >{children}</Typography>
  );
};

export default TitleBlock;
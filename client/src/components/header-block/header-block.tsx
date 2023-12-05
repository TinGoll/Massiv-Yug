import { SxProps, styled, useTheme } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Divider from "@mui/material/Divider/Divider";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

const Container = styled(Box)``;

interface Props {
  darkTheme?: boolean;
  number: number;
  text: string;
  sx?: SxProps;
}

const HeaderBlock: React.FC<Props> = ({ darkTheme, number, text, sx }) => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        height: {
          mobile: "55px",
          tablet: "128px",
        },
      }}
    >
      <Typography
        sx={[
          {
            ...theme.typography.blockNumber,
            display: "flex",
            alignItems: "center",
            height: "100%",
            fontSize: {
              mobile: "20px",
              tablet: "27px",
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        {number.toString().padStart(2, "0")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flex: "0 1 105px",
        }}
      />
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          bgcolor: darkTheme
            ? "rgba(255, 255, 255, 0.44)"
            : theme.palette.divider,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flex: "0 1 105px",
        }}
      />
      <Typography
        sx={{
          ...theme.typography.blockHeader,
          color: darkTheme ? "#FFFFFF" : "#000000",
          display: "flex",
          alignItems: "center",
          height: "100%",
          fontSize: {
            mobile: "12px",
            tablet: "16px",
          },
        }}
      >
        {text}
      </Typography>
    </Container>
  );
};

export default HeaderBlock;

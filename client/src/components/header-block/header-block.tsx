import styled from "@emotion/styled";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Divider from "@mui/material/Divider/Divider";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

const Container = styled(Box)(() => {
  return {};
});

interface Props {
  darkTheme?: boolean;
  number: number;
  text: string;
}

const HeaderBlock: React.FC<Props> = ({
  darkTheme,
  number,
  text,
  ...props
}) => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "128px",
      }}
    >
      <Typography
        sx={{
          ...theme.typography.blockNumber,          
          display: "flex",
          alignItems: "center",
          height: "100%",
          marginRight: "105px",
        }}
      >
        {number.toString().padStart(2, "0")}
      </Typography>
      <Divider orientation="vertical" flexItem />
      <Typography
        sx={{
          ...theme.typography.blockHeader,
          color: darkTheme ? "#FFFFFF" : "#000000",
          display: "flex",
          alignItems: "center",
          height: "100%",
          marginLeft: "105px",
        }}
      >
        {text}
      </Typography>
    </Container>
  );
};

export default HeaderBlock;
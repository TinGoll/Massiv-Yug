import React, { ReactNode } from "react";
import { SxProps } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { RoundIcon } from "..";

interface Props {
  icon?: ReactNode;
  title?: string;
  number?: number;
  button?: ReactNode;
  iconColorPrimary?: boolean;
  noPadding?: boolean;
  children?: ReactNode;
  sx?: SxProps;
}

const TextCard: React.FC<Props> = ({
  icon,
  title,
  number,
  button,
  iconColorPrimary,
  noPadding,
  children,
  sx,
  ...props
}) => {
  return (
    <Grid
      container
      display="grid"
      spacing={0}
      sx={[
        {
          backgroundColor: iconColorPrimary ? "#FFC0993D" : "",
          overflow: "hidden",
          padding: noPadding
            ? "0px"
            : {
                mobile: "15px",
                tablet: "30px",
              },
          alignItems: "center",
          gridTemplateAreas: {
            mobile: `'icon title' 'text text' 'button button'`,
            tablet: `'icon number' 'title title' 'text text' 'button button'`,
          },
          gridTemplateColumns: "auto 1fr",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {/* иконка */}
      <Grid
        item
        gridArea="icon"
        sx={{
          display: icon ? "initial" : "none",
          marginTop: number
            ? "0px"
            : {
                mobile: "0px",
                tablet: "18px",
              },
        }}
      >
        <RoundIcon color={iconColorPrimary ? "primary" : "secondary"}>
          {icon}
        </RoundIcon>
      </Grid>

      {/* цифра */}
      <Grid
        item
        gridArea="number"
        sx={{
          display: number
            ? {
                mobile: "none",
                tablet: "flex",
              }
            : "none",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="bigNumber">{number}</Typography>
      </Grid>

      {/* загаловок */}
      <Grid
        item
        gridArea="title"
        sx={{
          display: title ? "initial" : "none",
          marginTop: {
            mobile: "0px",
            tablet: number ? "20px" : "29px",
          },
          marginLeft: {
            mobile: "15px",
            tablet: "0px",
          },
        }}
      >
        <Typography
          variant="subtitle"
          sx={{
            fontSize: {
              mobile: "20px",
              tablet: "25px",
            },
          }}
        >
          {title}
        </Typography>
      </Grid>

      {/* текст */}
      <Grid
        item
        gridArea="text"
        sx={{
          marginTop: {
            mobile: "16px",
            tablet: number ? "11px" : "20px",
          },
        }}
      >
        <Typography
          variant="text"
          sx={{
            fontSize: {
              mobile: "15px",
              tablet: "16px",
            },
          }}
        >
          {children}
        </Typography>
      </Grid>

      {/* кнопка */}
      <Grid
        item
        gridArea="button"
        sx={{
          display: button ? "flex" : "none",
          justifyContent: "center",
          marginTop: {
            mobile: "26px",
            tablet: "16px",
          },
        }}
      >
        {button}
      </Grid>
    </Grid>
  );
};

export default TextCard;

import React from "react";
import { SxProps, Theme, styled, useTheme, alpha } from "@mui/material";
import { brightColor } from "../../utils";

const Button = styled("button")`
  overflow: hidden;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.24px;
  user-select: none;
`;

const RoundButton: React.FC<Props> = ({
  children,
  width,
  height = 55,
  sx,
  color = "primary",
  variant = "contained",
  ...props
}) => {
  const theme = useTheme();
  const calculateRadius = () => {
    return Number(height) / 2;
  };
  const radius = calculateRadius();
  const shadowColor = alpha(theme.colors.light[color], 0.2);
  return (
    <Button
      sx={[
        {
          borderRadius: `${radius}px`,
          width,
          height,
          background:
            variant === "contained" ? theme.colors.light[color] : "none",
          border:
            variant === "contained"
              ? "none"
              : `2px solid ${theme.palette.divider}`,
          px: 6,
          color:
            variant === "contained"
              ? theme.palette.common.white
              : theme.palette.text.primary,
          "&:focus": {
            boxShadow: `0px 0px 0px 4px ${shadowColor}`,
            transition: "box-shadow 0.2s ease-in-out",
          },
          "&:hover": {
            background:
              variant === "contained"
                ? brightColor(theme.colors.light[color], 0.2)
                : alpha(brightColor(theme.colors.light[color], -0.2), 0.2),
                transition: "background 0.05s ease-in-out",
          },
          "&:active": {
            background:
              variant === "contained"
                ? brightColor(theme.colors.light[color], -0.2)
                : alpha(brightColor(theme.colors.light[color], 0.4), 0.3),
                transition: "background 0.05s ease-in-out",
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </Button>
  );
};

export default RoundButton;
interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  width?: number | string;
  height?: number;
  sx?: SxProps<Theme>;
  color?: "secondary" | "tertiary" | "primary";
  variant?: "outlined" | "contained";
}

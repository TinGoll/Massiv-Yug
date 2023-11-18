import { SxProps, Theme, styled, useTheme, alpha } from "@mui/material";
import React from "react";

const Button = styled("button")`
  overflow: hidden;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 22.24px;
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
  const outlineColor = alpha(theme.colors.light[color], 0.4);
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
          color: theme.palette.common.white,
          outlineColor,
          "&:focus": {
            outline: `4px solid ${outlineColor}`,
            transition: "outline 0.3s ease-in-out",
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

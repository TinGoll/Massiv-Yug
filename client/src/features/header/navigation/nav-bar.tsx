import { AppBarProps, useTheme } from "@mui/material";
import React from "react";

const NavBar: React.FC<Props> = ({ sticky, sx, ...props }) => {
  const theme = useTheme();
  return (
    <NavBar
      sx={[
        {
          background: sticky ? undefined : "none transparent",
          transition: theme.transitions.create(["background"], {
            duration: theme.transitions.duration.standard,
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default NavBar;
interface Props extends AppBarProps {
  sticky?: boolean;
}

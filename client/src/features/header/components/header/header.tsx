import {
  AppBar,
  AppBarProps,
  useTheme,
  Container,
} from "@mui/material";
import React from "react";
import HeaderLogo from "../header-logo/header-logo";
import Navigation from "../navigation/navigation";
import { links } from "../../constants/links";
import NavigationItem from "../navigation/navigation-item";
import { Link } from "gatsby";
import Toolbar from "./toolbar";
import HeaderActions from "../header-actions/header-actions";

const Header: React.FC<Props> = ({ sticky, sx, ...props }) => {
  const theme = useTheme();
  return (
    <AppBar
      component="header"
      sx={[
        {
          background: sticky ? theme.colors.dark.secondary : "none transparent",
          transition: theme.transitions.create(["background"], {
            duration: 500,
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <Container maxWidth={"desktop"}>
        <Toolbar
          sx={{
            height: {
              mobile: 66,
              tablet: 96,
              laptop: 138,
            },
          }}
        >
          <HeaderLogo />
          <Navigation>
            {links.map((item, index) => (
              <NavigationItem key={index}>
                <Link to={item.to}>{item.text}</Link>
              </NavigationItem>
            ))}
          </Navigation>
          <HeaderActions />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
interface Props extends AppBarProps {
  sticky?: boolean;
}

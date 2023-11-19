import { SxProps, Theme, styled } from "@mui/material";
import React from "react";

const Nav = styled("nav")`
  width: auto;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const Ul = styled("ul")`
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Navigation: React.FC<Props> = ({ ...props }) => {
  return (
    <Nav>
      <Ul {...props} />
    </Nav>
  );
};

export default Navigation;
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  sx?: SxProps<Theme>;
}

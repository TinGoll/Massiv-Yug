import { styled, alpha } from "@mui/material";
import React from "react";
import LowerRightArrowIcon from "../../assets/icons/lower-right-arrow-icon";

const Button = styled("button")`
  height: 108px;
  width: 108px;
  border-radius: 50%;
  border: none;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows[4]};
  background-color: ${({ theme }) => theme.palette.common.white};
  outline-color: ${({ theme }) => alpha(theme.palette.common.white, 0.3)};
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
  :focus {
    outline: ${({ theme }) =>
      `4px solid ${alpha(theme.palette.common.white, 0.3)}`};
    transition: outline 0.3s ease-in-out;
  }
  :active {
    background-color: gray;
  }
`;

const ActionButton: React.FC<Props> = (props) => {
  return (
    <Button {...props}>
      <LowerRightArrowIcon width={32} height={32} />
    </Button>
  );
};

export default ActionButton;
type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

import { styled } from "@mui/material";
import React from "react";
import LowerRightArrowIcon from "../../assets/icons/lower-right-arrow-icon";


const Button = styled("button")`
  height: 108px;
  width: 108px;
  border-radius: 50%;
  border: none;
  overflow: hidden;
  box-shadow: ${({theme}) => theme.shadows[4]};
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
  :focus {
    outline: 4px solid rgba(256, 256, 256, 0.4);
  }
  :active {
    background-color: gray;
  }
`;

const ActionButton = () => {
  return (
    <Button>
      <LowerRightArrowIcon width={32} height={32} />
    </Button>
  );
};

export default ActionButton;

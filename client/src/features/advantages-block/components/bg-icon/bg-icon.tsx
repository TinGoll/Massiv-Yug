import { styled } from "@mui/material";
import React from "react";
import WoodTextureIcon from "../../../../assets/icons/wood-texture-icon";

const IconContainer = styled("div")`
  position: absolute;
  top: 67px;
  right: 167px;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    display: none;
  }
`;

const BgIcon: React.FC = () => {
  return (
    <IconContainer>
      <WoodTextureIcon />
    </IconContainer>
  );
};

export default BgIcon;

import { styled } from "@mui/material";
import React from "react";
import WoodTextureIcon from "../../../assets/icons/wood-texture-icon";

const IconContainer = styled("div")`
  position: absolute;
  top: 0px;
  left: 70px;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    display: none;
  }
`;

const BgIcon: React.FC = () => {
  return (
    <IconContainer
      sx={{
        display: {
          mobile: "none",
          laptop: "flex",
        },
      }}
    >
      <WoodTextureIcon />
    </IconContainer>
  );
};

export default BgIcon;

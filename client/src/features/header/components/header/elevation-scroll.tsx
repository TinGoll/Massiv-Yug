import { useScrollTrigger } from "@mui/material";
import React from "react";

const ElevationScroll = ({ children }: Props): React.ReactElement => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 32,
  });

  const elevation = trigger ? 4 : 0;
  const sticky = trigger;

  return React.cloneElement(children, {
    elevation,
    sticky,
  });
};

export default ElevationScroll;
interface Props {
  children: React.ReactElement;
}

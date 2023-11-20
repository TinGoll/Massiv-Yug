import { styled } from "@mui/material";

const NavigationItem = styled("li")`
  /* margin: 0 10px; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.common.white};
    font-size: 16px;
    font-weight: 400;
    line-height: 21.28px;
    display: block;
    transition: color 0.3s, text-shadow 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.light.tertiary};
      text-shadow: 1px 1px 0px ${({ theme }) => theme.colors.light.tertiary};
    }

    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.light.tertiary};
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;
export default NavigationItem;

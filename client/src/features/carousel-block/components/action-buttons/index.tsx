import React, { memo, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { RoundButton } from "../../../../components";
import { ButtonItem } from "../../constants/buttons-list";

const Wrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 38px;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    flex-direction: column;
    gap: 8px;
    button {
      width: 100%;
    }
  }
`;

const ActionButtons: React.FC<Props> = ({ value, setValue, list }) => {
  const handleClick = (val: string) => {
    typeof setValue === "function" && setValue(val);
  };

  return (
    <Wrapper>
      {list.map((item) => (
        <RoundButton
          key={item.value}
          variant={value === item.value ? "contained" : "outlined"}
          color={value === item.value ? "primary" : "secondary"}
          onClick={() => handleClick(item.value)}
          sx={{ minWidth: 90 }}
        >
          {item.name}
        </RoundButton>
      ))}
    </Wrapper>
  );
};

export default memo(ActionButtons);
interface Props {
  list: ButtonItem[];
  setValue?: (value: string) => void;
  value?: string;
}

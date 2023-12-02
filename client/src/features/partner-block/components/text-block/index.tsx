import { SxProps, styled } from "@mui/material";
import React from "react";
import TextList from "../text-list";
import constants from "../../constants";

const Container = styled("div")``;
const Text = styled("p")`
  color: #fff;
  font-family: Orchidea Pro;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 133%; /* 29.26px */
  letter-spacing: -0.44px;
  margin-top: 28px;
`;

const TextBlock: React.FC<Props> = (props) => {
  return (
    <Container {...props}>
      <TextList list={constants.list} />
      <Text>
        Вы обратились по адресу! Наш потенциал и возможности открыты для Вас!
      </Text>
      <Text>Станьте партнером одного из крупнейших предприятий!</Text>
    </Container>
  );
};

export default TextBlock;
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sx?: SxProps;
}

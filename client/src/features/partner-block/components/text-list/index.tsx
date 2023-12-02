import { SxProps, styled } from "@mui/material";
import React from "react";
import WhitePoint from "../../../../assets/icons/white-point";

const Ul = styled("ul")`
  list-style-type: none;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 139%; /* 25.02px */
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0;
  padding: 0;
  li {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 32px;
    flex: 1;
  }

  > div {
    flex: auto;
  }
`;

const TextList: React.FC<Props> = ({ list, ...props }) => {
  return (
    <Ul {...props}>
      {list.map((text, index) => (
        <li key={index}>
          <div>
            <WhitePoint />
          </div>
          <p>{text}</p>
        </li>
      ))}
    </Ul>
  );
};

export default TextList;
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  list: string[];
  sx?: SxProps;
}

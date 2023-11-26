import { Typography, useTheme } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import { TitleBlock } from "../../../../components";

const TextBlock = () => {
  const theme = useTheme();
  return (
    <>
      <TitleBlock mt={2}>
        Уникальная текстура <br /> натурального дерева
      </TitleBlock>
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.common.black,
          textAlign: "center",
          fontSize: "17px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "139%",
          mt: 1,
        }}
      >
        подчеркнет неповторимый вкус, создаст уют и гармонию в вашем
        пространстве!
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.common.black,
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "139%",
          textAlign: "center",
          mt: 1,
          a: {
            color: "#2F80ED",
            fontSsize: "15px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "139%",
            textDecorationLine: "underline",
          },
        }}
      >
        Выберите конструктив, материал, цвет и текстуру или{" "}
        <Link to="/">расскажите нам о своих идеях</Link>
      </Typography>
    </>
  );
};

export default TextBlock;

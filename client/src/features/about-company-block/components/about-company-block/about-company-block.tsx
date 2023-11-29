import { Block, Offset, RoundButton } from "../../../../components";
import {
  Container,
  Grid,
  Theme,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { HeaderBlock, TitleBlock } from "../../../../components";
import ImagesComponent from "../images-component/images-component";
import ListComponents from "../list-components/list-components";

const Crimson = styled("span")`
  color: ${({ theme }) => theme.colors.light.primary};
`;

const AboutCompanyBlock = () => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("laptop")
  );

  const onClickMoreDetails = () => {
    // клик на кнопке "Подробнее"
  };

  return (
    <Block
      id="05"
      sx={{
        display: "grid",
        justifyItems: "center",
      }}
    >
      <Offset />
      <Container maxWidth="desktop">

        <HeaderBlock number={5} text={"О компании"} />

        <TitleBlock
          sx={{
            marginTop: isMobile ? "25px" : "70px",
          }}
        >
          КАЧЕСТВЕННАЯ СТИЛЬНАЯ МЕБЕЛЬ
        </TitleBlock>
        

        <Grid
          container
          marginTop={isMobile ? "17px" : "57px"}
          display="grid"
          gridTemplateAreas={
            isMobile
              ? `'text1' 'images' 'text2' 'list' 'button'`
              : `'images text1' 'images text2' 'images list' 'images button'`
          }
          gridTemplateColumns={isMobile ? "1fr" : "auto 1fr"}
          // columnSpacing="90px"
          gap={"0 90px"}
          rowSpacing={isMobile ? "20px" : "35px"}
        >
          <Grid item gridArea="text1">
            <Typography
              sx={{
                color: "#000",
                fontFamily: "Orchidea Pro",
                fontSize: isMobile ? "18px" : "26px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "133%",
                letterSpacing: "-0.52px",
              }}
            >
              Наша компания <Crimson>более 20 лет</Crimson> занимается
              производством элитной мебели, дверей и лестниц из массива дуба,
              бука и ясеня.
            </Typography>
          </Grid>
          <Grid item gridArea="text2">
            <Typography variant="text" fontSize={isMobile ? "15px" : "16px"}>
              Дизайн интерьера дома – это ваша индивидуальность, и центральное
              место здесь занимает качественная стильная мебель. Благодаря
              компании «МАССИВ-ЮГ» вы сами можете принять участие в создание
              своей мебели из массива, выбирая её стилистику, конфигурацию,
              цветовые решения и фурнитуру. Всё остальное сделаем мы.
            </Typography>
          </Grid>

          <Grid item gridArea="list">
            <ListComponents />
          </Grid>

          <Grid item gridArea="button" margin={"0 auto"}>
            <RoundButton
              onClick={onClickMoreDetails}
              height={isMobile ? 86 : 100}
              width={isMobile ? 206 : 230}
            >
              Подробнее
            </RoundButton>
          </Grid>
          <Grid item gridArea="images">
            <ImagesComponent />
          </Grid>
        </Grid>
      </Container>
    </Block>
  );
};

export default AboutCompanyBlock;

import {
  Box,
  Container,
  Theme,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Block, ImageLayout, TitleBlock } from "../../../components";
import { StaticImage } from "gatsby-plugin-image";
import { Lamp } from "../../../assets/icons";

const FromIdeaBlock = () => {
  const isLaptop = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("laptop")
  );

  const isTablet = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("tablet")
  );

  const BoldStyle = styled("span")`
    font-weight: 600;
  `;

  const Crimson = styled("span")`
    color: ${({ theme }) => theme.colors.light.primary};
  `;

  return (
    <Block
      id="FromIdea"
      sx={{
        display: "grid",
        justifyItems: "center",
      }}
    >
      <Container maxWidth="desktop">
        <TitleBlock
          marginBottom={isLaptop ? "26px" : "43px"}
          sx={{
            textAlign: isLaptop ? "center" : "start",
          }}
        >
          Массив-юг: От идеи до воплощения в каждой мелочи
        </TitleBlock>

        <Box
          display="flex"
          flexDirection={isLaptop ? "column-reverse" : "row"}
          gap="19px 76px"
          marginBottom={isLaptop ? "32px" : "60px"}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap={isLaptop ? "10px" : "30px"}
          >
            <Typography variant="text" fontSize={isLaptop ? "15px" : "16px"}>
              Дизайн интерьера дома – это ваша индивидуальность, и центральное
              место здесь занимает качественная стильная мебель. Благодаря
              компании «МАССИВ-ЮГ» вы сами можете принять участие в создание
              своей мебели из массива, выбирая её стилистику, конфигурацию,
              цветовые решения и фурнитуру. Всё остальное сделаем мы.
            </Typography>
            <Typography variant="text" fontSize={isLaptop ? "15px" : "16px"}>
              Мастерская «МАССИВ-ЮГ» специализируется на создании элитной
              качественной мебели, лестниц из массива натуральной древесины на
              заказ. Уже более десяти лет мы производим кухни, фасады, двери из
              массива и декоративные элементы из твёрдых пород дерева, таких как
              дуб, ольха, бук и ясень.
            </Typography>
            <Typography variant="text" fontSize={isLaptop ? "15px" : "16px"}>
              За время работы мы накопили огромный опыт и знания, позволяющие
              создавать не просто мебель, а настоящие произведения искусства,
              которые по достоинству оценят люди с хорошим вкусом, ценящие
              изысканность и стиль. Вся мебель, производящаяся в нашей
              мастерской, изготавливается из цельной древесины или массива, что
              видно даже невооружённым глазом простого обывателя. С лёгкой руки
              наших дизайнеров и мастеров, мы добавим в ваш дом больше эстетики
              и новые акценты в интерьере, создадим уникальный стиль и привнесём
              немного волшебства.
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontFamily: "Orchidea Pro",
                fontSize: isLaptop ? "18px" : "26px",
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
          </Box>
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              gap={isLaptop ? "30px" : "37px"}
            >
              <ImageLayout
                width={isTablet ? 153 : 238}
                height={isTablet ? 235 : 366}
              >
                <StaticImage
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src="../../../images/about-page/image1.png"
                  alt="Кухня Массив-юг"
                />
              </ImageLayout>

              <ImageLayout
                width={isTablet ? 153 : 238}
                height={isTablet ? 235 : 366}
              >
                <StaticImage
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src="../../../images/about-page/image2.png"
                  alt="Кухня Массив-юг"
                />
              </ImageLayout>
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              paddingTop={isLaptop ? "10px" : "20px"}
              width={isLaptop ? "100%" : 506}
              gap="10px"
            >
              <Lamp width="40px" height="40px" />
              <Typography
                variant="text"
                fontSize={isLaptop ? "15px" : "16px"}
                flex={1}
                marginTop="30px"
              >
                Расширяйте пространство, изменяйте геометрию помещения,
                создавайте акценты{" "}
                <BoldStyle>
                  — творите настоящие чудеса с помощью грамотного подбора мебели
                </BoldStyle>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Block>
  );
};

export default FromIdeaBlock;

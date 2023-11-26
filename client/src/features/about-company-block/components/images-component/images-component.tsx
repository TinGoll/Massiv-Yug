import { Box, Theme, Typography, styled, useMediaQuery } from "@mui/material";
import React from "react";
import { ImageLayout } from "../../../../components";
import { StaticImage } from "gatsby-plugin-image";
import { Lamp } from "../../../../assets/icons";

const BoldStyle = styled("span")`
  font-weight: 600;
`;

const ImagesComponent = () => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("tablet")
  );

  return (
    <Box>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <ImageLayout width={isMobile ? 153 : 238} height={isMobile ? 235 : 366}>
          <StaticImage
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src="../../../../images/block-about-company/image1.png"
            alt="Кухня Массив-юг"
          />
        </ImageLayout>

        <ImageLayout
          width={isMobile ? 153 : 238}
          height={isMobile ? 235 : 366}
          sx={{
            marginLeft: "30px",
          }}
        >
          <StaticImage
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src="../../../../images/block-about-company/image2.png"
            alt="Кухня Массив-юг"
          />
        </ImageLayout>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        marginTop={isMobile ? "10px" : "20px"}
        width={isMobile ? "100%" : 506}
      >
        <Lamp width="40px" height="40px" />
        <Typography
          variant="text"
          fontSize={isMobile ? "15px" : "16px"}
          flex={1}
          marginTop="30px"
          marginLeft="10px"
        >
          Расширяйте пространство, изменяйте геометрию помещения, создавайте
          акценты{" "}
          <BoldStyle>
            — творите настоящие чудеса с помощью грамотного подбора мебели
          </BoldStyle>
        </Typography>
      </Box>
    </Box>
  );
};

export default ImagesComponent;

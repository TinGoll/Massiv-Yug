import { Divider, Grid, Theme, useMediaQuery } from "@mui/material";
import React, { Fragment } from "react";
import { arrayCardItems } from "../../constants/constants";
import TextCard from "../../../../components/text-card/text-card";
import { RoundButton } from "../../../../components";

interface Props {
  onClickFunc: () => void;
}

const CardsBlock: React.FC<Props> = ({ onClickFunc }) => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("tablet")
  );

  return (
    <Grid
      container
      display="grid"
      spacing={0}
      justifyItems="stretch"
      sx={{
        mt: {
          mobile: 2,
          tablet: 8,
        },
        gridTemplateColumns: {
          mobile: "1fr",
          tablet: "1fr 1fr 1fr",
        },
      }}
    >
      {arrayCardItems.map((item, index, array) => {
        return (
          <Fragment key={item.key}>
            <Grid
              key={item.key}
              item
              sx={{
                display: "flex",
                alignItems: "flex-start",
                borderRightStyle: {
                  mobile: "none",
                  tablet: (index + 1) % 3 === 0 ? "none" : "solid",
                },
                borderRightWidth: "1px",
                borderRightColor: "#0000003D",
                height: "100%",
              }}
            >
              <TextCard {...item} iconColorPrimary={index === array.length - 1}>
                {item.text}

                {index === array.length - 1 && (
                  <RoundButton
                    onClick={onClickFunc}
                    height={isMobile ? 86 : 100}
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                    }}
                  >
                    Записаться на экскурсию
                  </RoundButton>
                )}
              </TextCard>
            </Grid>
            {(index + 1) % 3 == 0 && index != array.length - 1 && (
              <>
                <Grid
                  item
                  key={`${item.key}_divider`}
                  gridColumn="span 3"
                  sx={{
                    display: {
                      mobile: "none",
                      tablet: "initial",
                    },
                    marginTop: {
                      mobile: "0px",
                      tablet: "25px",
                    },
                    marginBottom: {
                      mobile: "0px",
                      tablet: "25px",
                    },
                  }}
                >
                  <Divider />
                </Grid>
              </>
            )}
          </Fragment>
        );
      })}
    </Grid>
  );
};

export default CardsBlock;

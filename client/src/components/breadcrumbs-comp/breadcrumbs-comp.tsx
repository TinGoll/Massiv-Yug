import React from "react";
import { Breadcrumbs, SxProps, Typography } from "@mui/material";
import { Link } from "gatsby";
import Delimiter from "../../assets/icons/delimiter";
import theme from "../../theme/theme";

interface Props {
  adress: string[];
  links?: string[];
  sx?: SxProps;
}

const BreadcrumbsComp: React.FC<Props> = ({ adress, links, sx, ...props }) => {
  return (
    <Breadcrumbs
      separator={<Delimiter />}
      sx={[{}, ...(Array.isArray(sx) ? sx : [sx])]}
      {...props}
    >
      {adress.map((item, index, array) => {
        return links && index < links.length ? (
          <Link key={`${index}:${item}`} to={links[index]}>
            <Typography
              variant="body1"
              marginLeft={index > 0 ? "23px" : "0px"}
              marginRight={index < array.length - 1 ? "23px" : "0px"}
              sx={{
                ...theme.typography.fontBreadcrumbs,
                color:
                  array.length - 1 > index
                    ? "#000"
                    : theme.colors.light.primary,
                fontWeight: array.length - 1 > index ? 500 : 300,
              }}
            >
              {item}
            </Typography>
          </Link>
        ) : (
          <Typography
            key={`${index}:${item}`}
            variant="body1"
            marginLeft={index > 0 ? "23px" : "0px"}
            marginRight={index < array.length - 1 ? "23px" : "0px"}
            sx={{
              ...theme.typography.fontBreadcrumbs,
              color:
                array.length - 1 > index ? "#000" : theme.colors.light.primary,
              fontWeight: array.length - 1 > index ? 500 : 300,
            }}
          >
            {item}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComp;

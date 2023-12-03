import React, { ReactNode } from "react";
import { Breadcrumbs, SxProps, Typography } from "@mui/material";
import { Link } from "gatsby";
import Delimiter from "../../assets/icons/delimiter";
import theme from "../../theme/theme";

interface Props {
  adress: string[];
  links?: string[];
  sx?: SxProps;
}

interface PropsText {
  last?: boolean;
  first?: boolean;
  children: ReactNode;
  sx?: SxProps;
}

const Text: React.FC<PropsText> = ({ last, first, children, sx, ...props }) => {
  return (
    <Typography
      variant="body1"
      sx={[
        {
          ...theme.typography.fontBreadcrumbs,
          marginLeft: first ? "0px" : "23px",
          marginRight: last ? "0px" : "23px",
          color: last ? theme.colors.light.primary : "#000",
          fontWeight: last ? 300 : 500,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </Typography>
  );
};

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
            <Text first={index === 0} last={index === array.length - 1}>
              {item}
            </Text>
          </Link>
        ) : (
          <Text
            key={`${index}:${item}`}
            first={index === 0}
            last={index === array.length - 1}
          >
            {item}
          </Text>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComp;

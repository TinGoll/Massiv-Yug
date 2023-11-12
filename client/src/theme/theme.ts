import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  interface BreakpointOverrides {
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }

  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}

export const themeOptions: ThemeOptions = {
  typography: {
    poster: {
      fontSize: "4rem",
      color: "#333333",
      fontFamily: "Orchidea Pro",
    },
  },
  status: {
    danger: "#E9345B",
  },
  palette: {
    // mode: "light",
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#E9345B",
    },
    error: {
      main: "#c71668",
    },
    warning: {
      main: "#DC9D00",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 100,
      tablet: 100,
      laptop: 100,
      desktop: 100,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 90,
      "@media (min-width:600px)": {
        minHeight: 138,
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;

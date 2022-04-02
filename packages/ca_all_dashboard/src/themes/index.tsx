import createTheme from "@mui/material/styles/createTheme";

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
    blue: Palette["primary"];
    yellow: Palette["primary"];
    yellowLight900: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    black?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
    yellow?: PaletteOptions["primary"];
    yellowLight900?: PaletteOptions["primary"];
  }

  interface Theme {
    borderRadius: {
      md: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    borderRadius?: {
      md?: string;
    };
  }

  interface PaletteColor {
    light900?: string;
    light600?: string;
    light400?: string;
  }
  interface SimplePaletteColorOptions {
    light900?: string;
    light600?: string;
    light400?: string;
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    black: true;
    blue: true;
    yellow: true;
    yellowLight900: true;
  }
}

declare module "@mui/material/Checkbox" {
  interface CheckboxPropsColorOverrides {
    black: true;
    blue: true;
    yellow: true;
    yellowLight900: true;
  }
}

// define theme
export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Sk Modernist Bold, Open Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "24px",
      color: "#091B3D",
    },
    h6: {
      fontFamily: "Sk Modernist Bold, Open Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "24px",
      color: "#091B3D",
    },
    caption: {
      fontFamily: "Sk Modernist Regular, Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
      color: "#091B3D",
    },
  },
  palette: {
    black: {
      light900: "rgba(9, 27, 61, 0.1)",
      light600: "rgba(9, 27, 61, 0.4)",
      light400: "rgba(9, 27, 61, 0.6)",
      main: "#091B3D",
      contrastText: "#fff",
    },
    blue: {
      main: "#2772F0",
      contrastText: "#fff",
    },
    yellow: {
      light600: "rgba(245, 181, 68, 0.4)",
      light900: "rgba(245, 181, 68, 0.1)",
      main: "#F5B544",
      contrastText: "#fff",
    },
    yellowLight900: {
      main: "rgba(245, 181, 68, 0.1)",
      contrastText: "#091B3D",
    },
  },
  borderRadius: {
    md: "16px",
  },
});

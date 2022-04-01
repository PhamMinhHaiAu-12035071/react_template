import createTheme from "@mui/material/styles/createTheme";

declare module "@mui/material/styles" {
  interface Palette {
    black: PaletteOptions["primary"];
    blue: PaletteOptions["primary"];
    yellow: PaletteOptions["primary"];
    yellowLight: PaletteOptions["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    black?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
    yellow?: PaletteOptions["primary"];
    yellowLight?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    black: true;
    blue: true;
    yellow: true;
    yellowLight: true;
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
      main: "#091B3D",
      contrastText: "#fff",
    },
    blue: {
      main: "#2772F0",
      contrastText: "#fff",
    },
    yellow: {
      main: "#F5B544",
      contrastText: "#fff",
    },
    yellowLight: {
      main: "rgba(245, 181, 68, 0.1)",
      contrastText: "#091B3D",
    },
  },
});

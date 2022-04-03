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

export * from "./default_theme";
export * from "./global_style";

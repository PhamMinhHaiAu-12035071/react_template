// define theme
import createTheme from "@mui/material/styles/createTheme";
import {borderRadius} from "./border_radius";
import {palette} from "./palette";
import {typography} from "./typography";

const defaultTheme = createTheme({
  typography: typography,
  palette: palette,
  borderRadius: borderRadius,
});

export {defaultTheme};

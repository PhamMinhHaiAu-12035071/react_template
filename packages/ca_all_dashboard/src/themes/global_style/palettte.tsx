import {Theme} from "@mui/material/styles/createTheme";

const palette = (theme: Theme) => ({
  "--color-primary": theme.palette.primary.main,
  "--color-secondary": theme.palette.secondary.main,
  "--color-black-light900": theme.palette.black.light900,
  "--color-black-light600": theme.palette.black.light600,
  "--color-black-light400": theme.palette.black.light400,
  "--color-black-main": theme.palette.black.main,
  "--color-black-contrastText": theme.palette.black.contrastText,
  "--color-blue-main": theme.palette.blue.main,
  "--color-blue-contrastText": theme.palette.blue.contrastText,
  "--color-yellow-light600": theme.palette.yellow.light600,
  "--color-yellow-light900": theme.palette.yellow.light900,
  "--color-yellow-main": theme.palette.yellow.main,
  "--color-yellow-contrastText": theme.palette.yellow.contrastText,
});

export {palette};

import {Theme} from "@mui/material/styles/createTheme";

const borderRadius = (theme: Theme) => ({
  "--border-radius-md": theme.borderRadius.md,
});

export {borderRadius};

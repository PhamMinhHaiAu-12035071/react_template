import {Theme} from "@mui/material/styles/createTheme";
import GlobalStyles from "@mui/material/GlobalStyles";
import {palette} from "./palettte";
import {borderRadius} from "./border_radius";

const setGlobalStyles = (theme: Theme) => (
  <GlobalStyles
    styles={{
      ":root": {
        ...palette(theme),
        ...borderRadius(theme),
      },
    }}
  />
);

export {setGlobalStyles};

import React from "react";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {setGlobalStyles, defaultTheme} from "./themes";
import {RootRouter} from "./routes";
import "./i18n/config";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {setGlobalStyles(defaultTheme)}
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <RootRouter />
      </Box>
    </ThemeProvider>
  );
}

export default App;

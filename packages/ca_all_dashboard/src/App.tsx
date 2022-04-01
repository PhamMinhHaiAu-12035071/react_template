import React from "react"
import RootRouter from "./routes"
import {Box, CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./themes"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <RootRouter />
      </Box>
    </ThemeProvider>
  )
}

export default App

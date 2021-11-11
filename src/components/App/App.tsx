import * as React from "react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { BrowserRouter as Router } from "react-router-dom"
import { StylesProvider } from "@mui/styles"
import Routes from "routes"
import theme from "theme"

const App = () => (
  <>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </StylesProvider>
  </>
)

export default App

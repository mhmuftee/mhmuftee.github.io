import * as React from "react"
import { CssBaseline } from "@mui/material"
import { BrowserRouter as Router } from "react-router-dom"
import { StylesProvider } from "@mui/styles"
import Routes from "routes"
import ThemeProvider from "theme/ThemeProvider"

const App = () => (
  <>
    <StylesProvider injectFirst>
      <ThemeProvider>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </StylesProvider>
  </>
)

export default App

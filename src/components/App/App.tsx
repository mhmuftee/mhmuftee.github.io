import React from "react"

import { CssBaseline } from "@mui/material"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "routes"
import { ThemeProvider } from "theme"

const App = () => (
  <ThemeProvider>
    <HelmetProvider>
      <CssBaseline enableColorScheme />
      <Router>
        <AppRoutes />
      </Router>
    </HelmetProvider>
  </ThemeProvider>
)

export default App

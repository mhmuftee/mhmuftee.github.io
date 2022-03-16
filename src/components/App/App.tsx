import React from "react"

import { CssBaseline } from "@mui/material"
import { HelmetProvider } from "react-helmet-async"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { store } from "redux/store"
import Routes from "routes"
import { ThemeProvider } from "theme"

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <HelmetProvider>
        <CssBaseline enableColorScheme />
        <Router>
          <Routes />
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  </Provider>
)

export default App

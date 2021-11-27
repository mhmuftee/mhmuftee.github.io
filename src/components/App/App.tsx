import React from "react"
import { CssBaseline } from "@mui/material"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "routes"
import { ThemeProvider } from "theme"
import { Provider } from "react-redux"
import { store } from "redux/store"

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  </Provider>
)

export default App

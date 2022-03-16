import React from "react"

import { useMediaQuery } from "@mui/material"
import {
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
  createTheme as createMuiTheme,
} from "@mui/material/styles"
import { useLocalStorage } from "hooks/useLocalStorage"
import { darkThemeMode, lightThemeMode, ThemeMode } from "types"

import { darkPalette } from "./PalellteDark"
import { lightPalette } from "./PaletteLight"

export const ThemeContext = React.createContext({
  changeTheme: () => {},
})

const createTheme = (mode: ThemeMode) =>
  createMuiTheme({
    palette: mode === "dark" ? darkPalette : lightPalette,
    typography: {
      fontFamily: ["Nunito Sans", "Nunito"].join(","),
      button: {
        textTransform: "none",
      },
    },
    measurements: {
      appbarheight: 70,
      sidebarwidth: 180,
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  })

const ThemeProvider = (props: React.PropsWithChildren<{}>) => {
  const { children } = props

  const [mode, setMode] = useLocalStorage("thememode", "")
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const value = React.useMemo(
    () => ({
      changeTheme: () => {
        setMode(mode === "light" ? "dark" : "light")
      },
    }),
    [mode, setMode]
  )

  React.useEffect(() => {
    if (mode === "") {
      setMode(prefersDarkMode ? darkThemeMode : lightThemeMode)
    }
  }, [mode, prefersDarkMode, setMode])

  const theme = React.useMemo(
    () => responsiveFontSizes(createTheme(mode)),
    [mode]
  )

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

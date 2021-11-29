import React from "react"

import { useMediaQuery } from "@mui/material"
import {
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
  createTheme as createMuiTheme,
} from "@mui/material/styles"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import { changeTheme, selectThemeMode } from "redux/reducers/ui/slice"
import { darkThemeMode, lightThemeMode, ThemeMode } from "types"

import { darkPalette } from "./PalellteDark"
import { lightPalette } from "./PaletteLight"

const createTheme = (mode: ThemeMode) =>
  createMuiTheme({
    palette: mode === "dark" ? darkPalette : lightPalette,
    typography: {
      button: {
        textTransform: "none",
      },
    },
    measurements: {
      appbarheight: 70,
      sidebarwidth: 210,
    },
  })

const ThemeProvider = (props: React.PropsWithChildren<{}>) => {
  const { children } = props

  const dispatch = useAppDispatch()

  const themeMode = useAppSelector(selectThemeMode)

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  React.useEffect(() => {
    const mode = prefersDarkMode ? darkThemeMode : lightThemeMode
    dispatch(changeTheme(mode))
  }, [dispatch, prefersDarkMode])

  const theme = React.useMemo(
    () => responsiveFontSizes(createTheme(themeMode)),
    [themeMode]
  )

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider

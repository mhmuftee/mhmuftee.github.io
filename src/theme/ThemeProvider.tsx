import React from "react"
import { useMediaQuery } from "@mui/material"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import {
  createTheme,
  Theme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles"
import { ThemeMode, darkThemeMode, lightThemeMode } from "types"

import { changeTheme, selectThemeMode } from "redux/reducers/ui/uiSlice"

import { ThemeOptions } from "./types"
import { lightVariant } from "./lightVariant"
import { darkVariant } from "./darkVariant"

const createCustomTheme = (variant: ThemeOptions) =>
  createTheme({
    palette: variant.palette,
    typography: variant.typography,
    header: variant.header,
    sidebar: variant.sidebar,
    body: variant.body,
    footer: variant.footer,
    particle: variant.particle,
  })

const themes = new Map<ThemeMode, ThemeOptions>()

themes.set("dark", createCustomTheme(darkVariant))
themes.set("light", createCustomTheme(lightVariant))

const getTheme = (mode: ThemeMode) => themes.get(mode) as Theme

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
    () => responsiveFontSizes(getTheme(themeMode)),
    [themeMode]
  )

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider

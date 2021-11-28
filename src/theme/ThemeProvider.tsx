import React from "react"
import { useMediaQuery } from "@mui/material"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import {
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles"
import { darkThemeMode, lightThemeMode } from "types"

import { changeTheme, selectThemeMode } from "redux/reducers/ui/uiSlice"

import { createTheme } from "./createTheme"

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

  //console.log(JSON.stringify(theme.palette, null, 2))

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider

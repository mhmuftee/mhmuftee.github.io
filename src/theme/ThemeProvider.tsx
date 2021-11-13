import * as React from "react"
import { useMediaQuery } from "@mui/material"
import { useAppSelector, useAppDispatch } from "redux/hooks"
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { getTheme } from "./index"

import { changeTheme, selectThemeMode } from "redux/reducers/ui/uiSlice"

const ThemeProvider = (props: React.PropsWithChildren<{}>) => {
  const { children } = props
  const dispatch = useAppDispatch()

  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  React.useEffect(() => {
    if (prefersDarkMode) dispatch(changeTheme("dark"))
  }, [dispatch, prefersDarkMode])

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider

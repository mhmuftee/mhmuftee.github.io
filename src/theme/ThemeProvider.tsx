import React, { useMemo, PropsWithChildren } from "react"

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { useThemeMode } from "hooks/useThemeMode"

import { getTheme } from "./createTheme"

export const ThemeContext = React.createContext({
  changeTheme: () => {},
})

const ThemeProvider = (props: PropsWithChildren<{}>) => {
  const [mode, changeTheme] = useThemeMode()
  const theme = useMemo(() => getTheme(mode), [mode])
  const value = useMemo(() => ({ changeTheme }), [changeTheme])

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

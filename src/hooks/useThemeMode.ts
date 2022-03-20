import { useCallback, useEffect } from "react"

import { useMediaQuery } from "@mui/material"
import { darkThemeMode, lightThemeMode, ThemeMode } from "types"

import { useLocalStorage } from "./useLocalStorage"

export const useThemeMode = (): [ThemeMode, () => void] => {
  const [mode, setMode] = useLocalStorage("thememode", "")
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const changeTheme = useCallback(() => {
    setMode(mode === lightThemeMode ? darkThemeMode : lightThemeMode)
  }, [mode, setMode])

  useEffect(() => {
    if (mode === "") setMode(prefersDarkMode ? darkThemeMode : lightThemeMode)
  }, [mode, prefersDarkMode, setMode])

  return [mode, changeTheme]
}

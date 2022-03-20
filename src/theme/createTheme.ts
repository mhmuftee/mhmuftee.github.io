import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from "@mui/material/styles"
import { ThemeMode, darkThemeMode } from "types"

import { darkPalette } from "./PalellteDark"
import { lightPalette } from "./PaletteLight"

const createTheme = (mode: ThemeMode) =>
  createMuiTheme({
    palette: mode === darkThemeMode ? darkPalette : lightPalette,
    typography: {
      fontFamily: ["Nunito Sans", "Nunito"].join(","),
      button: {
        textTransform: "none",
      },
    },
    measurements: {
      appbarheight: 70,
      sidebarwidth: 200,
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        bigtablet: 850,
        laptop: 1024,
        desktop: 1200,
      },
    },
  })

export const getTheme = (mode: ThemeMode) =>
  responsiveFontSizes(createTheme(mode))

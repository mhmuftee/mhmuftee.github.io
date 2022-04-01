import { Theme } from "@mui/material"
import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from "@mui/material/styles"
import { ThemeMode, darkThemeMode } from "types"

import { getDarkParticlesOptions } from "./darkParticles"
import { getLightParticlesOptions } from "./lightParticles"
import { darkPalette } from "./PalellteDark"
import { lightPalette } from "./PaletteLight"

const createTheme = (mode: ThemeMode) =>
  createMuiTheme({
    palette: mode === darkThemeMode ? darkPalette : lightPalette,
    typography: {
      fontFamily: ["Poppins", "Nunito"].join(","),
      button: {
        textTransform: "none",
      },
    },
    measurements: {
      appbarheight: 70,
      sidebarwidth: 230,
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

export const getParticlesOptions = (theme: Theme) =>
  theme.palette.mode === "dark"
    ? getDarkParticlesOptions(theme)
    : getLightParticlesOptions(theme)

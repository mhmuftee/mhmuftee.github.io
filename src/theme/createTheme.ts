import { createTheme as createMuiTheme } from "@mui/material/styles"
import { ThemeMode } from "../types"

import { darkVariant } from "./darkVariant"
import { lightVariant } from "./lightVariant"

const createPalette = (mode: ThemeMode) =>
  mode === "dark" ? darkVariant : lightVariant

const createTheme = (mode: ThemeMode) =>
  createMuiTheme({
    palette: createPalette(mode),
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

export { createTheme }

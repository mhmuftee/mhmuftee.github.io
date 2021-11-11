import { createTheme } from "@mui/material/styles"
import { ThemeOptions } from "./types"
import variants from "./variants"

const createCustomTheme = (variant: ThemeOptions) =>
  createTheme({
    palette: variant.palette,
    typography: variant.typography,
    header: variant.header,
    sidebar: variant.sidebar,
    body: variant.body,
    footer: variant.footer,
  })

const themes = variants.map((variant) => createCustomTheme(variant))

export default themes[0]

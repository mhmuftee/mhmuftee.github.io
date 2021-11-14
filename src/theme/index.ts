import { createTheme, Theme } from "@mui/material/styles"
import { ThemeOptions } from "./types"
import { lightVariant } from "./lightVariant"
import { darkVariant } from "./darkVariant"

const variants = [lightVariant, darkVariant]

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

const themes = new Map<string, Theme>()

variants.forEach((variant) => {
  const mode = variant.palette?.mode
  if (mode) themes.set(mode, createCustomTheme(variant))
})

const getTheme = (mode: string) => themes.get(mode) as Theme

export { getTheme }

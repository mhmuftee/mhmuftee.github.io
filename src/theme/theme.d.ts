import { Measurements, ExtendedPalette, ExtendedBackground } from "types"

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground extends ExtendedBackground {}
}

declare module "@mui/material/styles" {
  interface Theme {
    measurements: Measurements
  }
  interface ThemeOptions {
    measurements?: Partial<Measurements>
  }
  interface Palette extends ExtendedPalette {}
  interface PaletteOptions extends Partial<ExtendedPalette> {}
  interface BreakpointOverrides {
    xs: false
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true
    tablet: true
    bigtablet: true
    laptop: true
    desktop: true
  }
}

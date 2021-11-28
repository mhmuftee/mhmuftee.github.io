import { Measurements, ExtendedPalette } from "types"

declare module "@mui/material/styles" {
  interface Theme {
    measurements: Measurements
  }
  interface ThemeOptions {
    measurements?: Partial<Measurements>
  }
  interface Palette extends ExtendedPalette {}
  interface PaletteOptions extends Partial<ExtendedPalette> {}
}

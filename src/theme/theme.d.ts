import { Measurements, MeasurementsOptions } from "./types"

declare module "@mui/material/styles/createTheme" {
  export interface Theme {
    measurements: Measurements
  }
  // allow configuration using `createMuiTheme`
  export interface ThemeOptions {
    measurements?: MeasurementsOptions
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    nodecolor: React.CSSProperties["color"]
    linkcolor: React.CSSProperties["color"]
  }
  interface PaletteOptions {
    nodecolor: React.CSSProperties["color"]
    linkcolor: React.CSSProperties["color"]
  }
}

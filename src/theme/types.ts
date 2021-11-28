import {
  PaletteOptions as MuiPaletteOptions,
  ThemeOptions as MuiThemeOptions,
} from "@mui/material/styles"
import React from "react"

export interface ThemeOptions extends MuiThemeOptions {
  measurements?: MeasurementsOptions
}
export interface Measurements {
  sidebarwidth: React.CSSProperties["width"]
  appbarheight: React.CSSProperties["height"]
}

export type MeasurementsOptions = Partial<Measurements>
export interface Palette extends MuiPaletteOptions {
  nodecolor: React.CSSProperties["color"]
  linkcolor: React.CSSProperties["color"]
}

export type PaletteOptions = Partial<Palette>

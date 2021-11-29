import React from "react"

import { PaletteMode as ThemeMode } from "@mui/material"

export const darkThemeMode: ThemeMode = "dark"
export const lightThemeMode: ThemeMode = "light"

export interface Measurements {
  sidebarwidth: React.CSSProperties["width"]
  appbarheight: React.CSSProperties["height"]
}
export interface ExtendedPalette {
  nodecolor: React.CSSProperties["color"]
  linkcolor: React.CSSProperties["color"]
}

export type { ThemeMode }

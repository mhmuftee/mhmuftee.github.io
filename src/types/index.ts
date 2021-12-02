import { CSSProperties } from "react"

import { PaletteMode as ThemeMode } from "@mui/material"

export const darkThemeMode: ThemeMode = "dark"
export const lightThemeMode: ThemeMode = "light"

export interface Measurements {
  sidebarwidth: CSSProperties["width"]
  appbarheight: CSSProperties["height"]
}
export interface ExtendedPalette {
  nodecolor: CSSProperties["color"]
  linkcolor: CSSProperties["color"]
}

export interface ExtendedBackground {
  body: CSSProperties["color"]
  header: CSSProperties["color"]
  sidebar: CSSProperties["color"]
}

export type { ThemeMode }

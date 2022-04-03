import { CSSProperties, FunctionComponent } from "react"

import { PaletteMode as ThemeMode, SvgIcon as MuiSvgIcon } from "@mui/material"

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

export type SvgIcon = typeof MuiSvgIcon

export interface IPage {
  id: string
  path: string
  header: string
  title: string
  Icon: SvgIcon
  Component: FunctionComponent
}

export interface IPerson {
  name: string
  profession: string
  githubURL: string
  linkedinURL: string
}

export interface ISkill {
  name: string
}

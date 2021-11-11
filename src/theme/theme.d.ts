import {
  Header,
  HeaderOptions,
  SideBar,
  SideBarOptions,
  Body,
  BodyOptions,
  Footer,
  FooterOptions,
} from "./types"

declare module "@mui/material/styles/createTheme" {
  export interface Theme {
    header: Header
    sidebar: SideBar
    body: Body
    footer: Footer
  }
  // allow configuration using `createMuiTheme`
  export interface ThemeOptions {
    header?: HeaderOptions
    sidebar?: SideBarOptions
    body?: BodyOptions
    footer?: FooterOptions
  }
}

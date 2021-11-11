import { ThemeOptions as MuiThemeOptions } from "@mui/material/styles"
import React from "react"

export interface ThemeOptions extends MuiThemeOptions {
  header: Header
  sidebar: SideBar
  body: Body
  footer: Footer
}

export interface Header {
  height: React.CSSProperties["height"]
  background: React.CSSProperties["color"]
}

export type HeaderOptions = Partial<Header>

export interface SideBar {
  width: React.CSSProperties["width"]
  background: React.CSSProperties["color"]
  footer: {
    color: React.CSSProperties["color"]
    background: React.CSSProperties["color"]
  }
}

export type SideBarOptions = Partial<SideBar>

export interface FilterBar {
  width: React.CSSProperties["width"]
  background: React.CSSProperties["background"]
  footer: {
    color: React.CSSProperties["color"]
    background: React.CSSProperties["color"]
  }
}

export type FilterBarOptions = Partial<FilterBar>

export interface Body {
  background: React.CSSProperties["background"]
}

export type BodyOptions = Partial<Body>

export interface CalendarEventColor {
  main: React.CSSProperties["color"]
  disabled: React.CSSProperties["color"]
}

export interface Calendar {
  interestedEventColor: CalendarEventColor
  registeredEventColor: CalendarEventColor
  personalEventColor: CalendarEventColor
}

export type CalendarOptions = Partial<Calendar>

export interface Footer {
  background: React.CSSProperties["background"]
  height: React.CSSProperties["height"]
}

export type FooterOptions = Partial<Footer>

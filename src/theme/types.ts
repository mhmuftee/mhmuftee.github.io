import { ThemeOptions as MuiThemeOptions } from "@mui/material/styles"
import React from "react"

export interface ThemeOptions extends MuiThemeOptions {
  header?: Header
  sidebar?: SideBar
  body?: Body
  footer?: Footer
  particle?: Particle
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

export interface Body {
  background: React.CSSProperties["background"]
}

export type BodyOptions = Partial<Body>

export interface Footer {
  background: React.CSSProperties["background"]
  height: React.CSSProperties["height"]
}

export type FooterOptions = Partial<Footer>

export interface Particle {
  nodecolor: React.CSSProperties["color"]
  linkcolor: React.CSSProperties["color"]
}

export type ParticleOptions = Partial<Particle>

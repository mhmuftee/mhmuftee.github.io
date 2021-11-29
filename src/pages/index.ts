import { FunctionComponent, ReactNode } from "react"

import { Home, Info as AboutIcon } from "@mui/icons-material"
import { SvgIcon } from "@mui/material"

import Aboutcomponent from "./about"
import Homecomponent from "./Home"
import MainLayout, { MainLayoutType } from "./Layout"

type Page = {
  id: string
  path: string
  header: string
  icon: typeof SvgIcon
  Component: FunctionComponent
  children?: ReactNode
}

const AboutPage: Page = {
  id: "About",
  path: "/about",
  header: "About",
  icon: AboutIcon,
  Component: Aboutcomponent,
}

const HomePage: Page = {
  id: "Home",
  path: "/",
  header: "Home",
  icon: Home,
  Component: Homecomponent,
}

const Pages = [HomePage, AboutPage]

export type { MainLayoutType, Page as PageDataType }

export { MainLayout, Pages }

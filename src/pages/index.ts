import { FunctionComponent, ReactNode } from "react"
import { SvgIcon } from "@mui/material"
import { Home as HomeIcon, Info as AboutIcon } from "@mui/icons-material"

import MainLayout, { MainLayoutType } from "./Layout"
import Homecomponent from "./home"
import Aboutcomponent from "./about"

type Page = {
  id: string
  path: string
  header: string
  icon: typeof SvgIcon
  Component: FunctionComponent
  children?: ReactNode
}

const HomePage: Page = {
  id: "Home",
  path: "/home",
  header: "Home",
  icon: HomeIcon,
  Component: Homecomponent,
}

const AboutPage: Page = {
  id: "About",
  path: "/about",
  header: "About",
  icon: AboutIcon,
  Component: Aboutcomponent,
}

const Pages = [HomePage, AboutPage]

export type { MainLayoutType, Page as PageDataType }

export { MainLayout, Pages }

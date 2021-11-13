import { FunctionComponent, ReactNode } from "react"
import { SvgIcon } from "@mui/material"
import { Info as AboutIcon } from "@mui/icons-material"

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

const AboutPage: Page = {
  id: "About",
  path: "/about",
  header: "About",
  icon: AboutIcon,
  Component: Aboutcomponent,
}

const Pages = [AboutPage]

export type { MainLayoutType, Page as PageDataType }

export { Homecomponent as HomePage, MainLayout, Pages }

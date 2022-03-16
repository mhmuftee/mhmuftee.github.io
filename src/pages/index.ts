import { FunctionComponent, ReactNode } from "react"

import {
  Home as HomeIcon,
  Info as AboutIcon,
  School as EduIcon,
  AutoFixHigh as SkillIcon,
  Psychology as ExpIcon,
} from "@mui/icons-material"
import { SvgIcon } from "@mui/material"

import Aboutcomponent from "./about"
import Homecomponent from "./Home"
import MainLayout from "./Layout"

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
  path: "/",
  header: "Home",
  icon: HomeIcon,
  Component: Homecomponent,
}

const ExpPage: Page = {
  id: "Experience",
  path: "/experience",
  header: "Experience",
  icon: ExpIcon,
  Component: Aboutcomponent,
}

const SkillPage: Page = {
  id: "Skills",
  path: "/skills",
  header: "Skills",
  icon: SkillIcon,
  Component: Aboutcomponent,
}

const EduPage: Page = {
  id: "Education",
  path: "/education",
  header: "Education",
  icon: EduIcon,
  Component: Aboutcomponent,
}

const AboutPage: Page = {
  id: "About",
  path: "/about",
  header: "About",
  icon: AboutIcon,
  Component: Aboutcomponent,
}

const Pages = [HomePage, ExpPage, SkillPage, EduPage, AboutPage]

export { MainLayout, Pages }

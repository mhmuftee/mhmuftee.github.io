import { FunctionComponent } from "react"

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
  title: string
  Icon: typeof SvgIcon
  Component: FunctionComponent
}

const HomePage: Page = {
  id: "Home",
  path: "/",
  title: "Home",
  Icon: HomeIcon,
  Component: Homecomponent,
}

const ExpPage: Page = {
  id: "Experience",
  path: "/experience",
  title: "Experience",
  Icon: ExpIcon,
  Component: Aboutcomponent,
}

const SkillPage: Page = {
  id: "Skills",
  path: "/skills",
  title: "Skills",
  Icon: SkillIcon,
  Component: Aboutcomponent,
}

const EduPage: Page = {
  id: "Education",
  path: "/education",
  title: "Education",
  Icon: EduIcon,
  Component: Aboutcomponent,
}

const AboutPage: Page = {
  id: "About",
  path: "/about",
  title: "About",
  Icon: AboutIcon,
  Component: Aboutcomponent,
}

const Pages = [HomePage, ExpPage, SkillPage, EduPage, AboutPage]

export { MainLayout, Pages }

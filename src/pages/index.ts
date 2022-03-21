import React from "react"

import {
  Home as HomeIcon,
  Info as AboutIcon,
  School as EduIcon,
  AutoFixHigh as SkillIcon,
  Psychology as ExpIcon,
} from "@mui/icons-material"
import { IPage } from "types"

const About = React.lazy(() => import("./About"))
const Home = React.lazy(() => import("./Home"))

const getTitle = (header: string) => `${header} | mhmuftee`

const HomePage: IPage = {
  id: "Home",
  path: "/",
  header: "Home",
  title: getTitle("Home"),
  Icon: HomeIcon,
  Component: Home,
}

const ExpPage: IPage = {
  id: "Experience",
  path: "/experience",
  header: "Experience",
  title: getTitle("Experience"),
  Icon: ExpIcon,
  Component: About,
}

const SkillPage: IPage = {
  id: "Skills",
  path: "/skills",
  header: "Skills",
  title: getTitle("Skills"),
  Icon: SkillIcon,
  Component: About,
}

const EduPage: IPage = {
  id: "Education",
  path: "/education",
  header: "Education",
  title: getTitle("Education"),
  Icon: EduIcon,
  Component: About,
}

const AboutPage: IPage = {
  id: "About",
  path: "/about",
  header: "About",
  title: getTitle("About"),
  Icon: AboutIcon,
  Component: About,
}

const routes = [HomePage, ExpPage, SkillPage, EduPage, AboutPage]

export { routes }

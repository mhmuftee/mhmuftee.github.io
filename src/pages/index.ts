import {
  Home as HomeIcon,
  Info as AboutIcon,
  School as EduIcon,
  AutoFixHigh as SkillIcon,
  Psychology as ExpIcon,
} from "@mui/icons-material"
import { IPage } from "types"

import Aboutcomponent from "./about"
import Homecomponent from "./Home"

const getTitle = (header: string) => `${header} - mhmuftee`

const HomePage: IPage = {
  id: "Home",
  path: "/",
  header: "Home",
  title: getTitle("Home"),
  Icon: HomeIcon,
  Component: Homecomponent,
}

const ExpPage: IPage = {
  id: "Experience",
  path: "/experience",
  header: "Experience",
  title: getTitle("Experience"),
  Icon: ExpIcon,
  Component: Aboutcomponent,
}

const SkillPage: IPage = {
  id: "Skills",
  path: "/skills",
  header: "Skills",
  title: getTitle("Experience"),
  Icon: SkillIcon,
  Component: Aboutcomponent,
}

const EduPage: IPage = {
  id: "Education",
  path: "/education",
  header: "Education",
  title: getTitle("Education"),
  Icon: EduIcon,
  Component: Aboutcomponent,
}

const AboutPage: IPage = {
  id: "About",
  path: "/about",
  header: "About",
  title: getTitle("About"),
  Icon: AboutIcon,
  Component: Aboutcomponent,
}

const Pages = [HomePage, ExpPage, SkillPage, EduPage, AboutPage]

export { Pages }

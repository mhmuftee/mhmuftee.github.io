/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react"

export const UIContext = createContext({
  menuClickHandler: () => {},
  menuCloseHandler: () => {},
  isMenuOpen: false,
  isSidebarOpen: false,
  isHomePage: false,
  isSmallScreen: false,
  title: "",
  setHeaderTitle: (s: string) => {},
})

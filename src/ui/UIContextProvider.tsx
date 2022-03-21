import React, { useMemo, PropsWithChildren } from "react"

import { useMediaQuery, Theme } from "@mui/material"
import { useInfo } from "hooks/useInfo"
import { useMenu } from "hooks/useMenu"
import { useSidebar } from "hooks/useSidebar"
import { useLocation } from "react-router-dom"

import { UIContext } from "./UIContext"

const UIContextProvider = (props: PropsWithChildren<{}>) => {
  const { pathname } = useLocation()
  const isHomePage = useMemo(() => pathname === "/", [pathname])

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("bigtablet")
  )

  const [title, setHeaderTitle] = useInfo()
  const [isSidebarOpen] = useSidebar(isHomePage, isSmallScreen)
  const [isMenuOpen, menuClickHandler, menuCloseHandler] = useMenu()

  const value = useMemo(
    () => ({
      title,
      isMenuOpen,
      isHomePage,
      isSmallScreen,
      isSidebarOpen,
      setHeaderTitle,
      menuClickHandler,
      menuCloseHandler,
    }),
    [
      title,
      isHomePage,
      isMenuOpen,
      isSidebarOpen,
      isSmallScreen,
      setHeaderTitle,
      menuClickHandler,
      menuCloseHandler,
    ]
  )

  return <UIContext.Provider value={value}>{props.children}</UIContext.Provider>
}

export default UIContextProvider

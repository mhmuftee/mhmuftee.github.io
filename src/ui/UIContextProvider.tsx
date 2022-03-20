import React, { useMemo, PropsWithChildren } from "react"

import { useMediaQuery, Theme } from "@mui/material"
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

  const [isSidebarOpen] = useSidebar(isHomePage, isSmallScreen)
  const [isMenuOpen, menuClickHandler, menuCloseHandler] = useMenu()

  return (
    <UIContext.Provider
      value={{
        isMenuOpen,
        isHomePage,
        isSmallScreen,
        isSidebarOpen,
        menuClickHandler,
        menuCloseHandler,
      }}
    >
      {props.children}
    </UIContext.Provider>
  )
}

export default UIContextProvider

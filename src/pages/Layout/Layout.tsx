import React, { useCallback, useMemo, useLayoutEffect } from "react"

import {
  Box as MuiBox,
  Toolbar as MuiToolbar,
  useMediaQuery,
  Theme,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import Header from "components/Header"
import Sidebar from "components/Sidebar"
import { useLocalStorage } from "hooks/useLocalStorage"
import { useLocation } from "react-router-dom"

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.measurements.appbarheight,
}))

const Root = styled(MuiBox)({
  display: "flex",
  height: "100%",
})

const Page = styled(MuiBox)(({ theme }) => ({
  flexGrow: 1,
  height: "100%",
  background: theme.palette.background.paper,
  margin: theme.spacing(1),
}))

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "issmallscreen",
})<{
  open?: boolean
  issmallscreen?: boolean
}>(({ theme, open, issmallscreen }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  background: theme.palette.background.body,
  marginLeft: 0,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!issmallscreen && {
    marginLeft: `-${theme.measurements.sidebarwidth}px`,
  }),
  ...(open && {
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

type LayoutProps = React.PropsWithChildren<{ header: string }>

const Layout = (props: LayoutProps) => {
  const { children, header } = props
  const [open, setOpen] = useLocalStorage("sidebaropen", false)
  const { pathname } = useLocation()

  const isHomePage = useMemo(() => pathname === "/", [pathname])

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("tablet")
  )

  const closeSideBar = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  useLayoutEffect(() => {
    const shouldOpen = !isHomePage && !isSmallScreen
    setOpen(shouldOpen)
  }, [isHomePage, isSmallScreen, setOpen])

  return (
    <Root>
      <Header
        title={header}
        isHomePage={isHomePage}
        isSmallScreen={isSmallScreen}
      />
      <Sidebar open={open} onClose={closeSideBar} />
      <Main open={open} issmallscreen={isSmallScreen}>
        <Toolbar />
        <Page>{children}</Page>
      </Main>
    </Root>
  )
}

export default Layout

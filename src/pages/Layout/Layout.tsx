import React, { FunctionComponent as FC } from "react"
import { PropsWithChildren } from "react"
import { styled } from "@mui/material/styles"
import { CssBaseline, Box, Toolbar as MuiToolbar } from "@mui/material"

import { useAppSelector } from "redux/hooks"
import Header from "components/Header"
import Sidebar from "components/Sidebar"
import { useLocation } from "react-router-dom"

import { selectOpenSideBar } from "redux/reducers/ui/uiSlice"

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.header.height,
}))

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  marginLeft: `-${theme.sidebar.width}px`,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

type MainLayoutProps = PropsWithChildren<{}>

const Layout = (props: MainLayoutProps) => {
  const isSidebarOpen = useAppSelector(selectOpenSideBar)

  const { pathname } = useLocation()

  const isHomePage = pathname === "/"

  const { children } = props

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header istransparent={isHomePage} issidebaropen={isSidebarOpen} />
      <Sidebar istransparent={isHomePage} open={isSidebarOpen} />
      <Main open={isSidebarOpen}>
        <Toolbar />
        {children}
      </Main>
    </Box>
  )
}

export default Layout

export type MainLayoutType = FC<MainLayoutProps>

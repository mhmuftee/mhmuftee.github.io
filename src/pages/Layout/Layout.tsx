import React, { FunctionComponent as FC } from "react"
import { PropsWithChildren } from "react"
import { styled } from "@mui/material/styles"
import {
  CssBaseline,
  Box as MuiBox,
  Toolbar as MuiToolbar,
} from "@mui/material"

import { useAppSelector } from "redux/hooks"
import Header from "components/Header"
import Sidebar from "components/Sidebar"
import { useLocation } from "react-router-dom"

import { selectOpenSideBar } from "redux/reducers/ui/uiSlice"

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.header.height,
}))

const Root = styled(MuiBox)({
  display: "flex",
})

const Page = styled(MuiBox)(({ theme }) => ({
  flexGrow: 1,
  height: "100%",
  background: theme.body.background,
  margin: theme.spacing(2),
}))

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  background: theme.footer.background,
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
    <Root>
      <CssBaseline />
      <Header istransparent={isHomePage} issidebaropen={isSidebarOpen} />
      <Sidebar istransparent={isHomePage} open={isSidebarOpen} />
      <Main open={isSidebarOpen}>
        <Toolbar />
        <Page>{children}</Page>
      </Main>
    </Root>
  )
}

export default Layout

export type MainLayoutType = FC<MainLayoutProps>

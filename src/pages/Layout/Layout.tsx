import React from "react"

import { Box as MuiBox, Toolbar as MuiToolbar } from "@mui/material"
import { styled } from "@mui/material/styles"
import Header from "components/Header"
import Sidebar from "components/Sidebar"
import { useLocation } from "react-router-dom"
import { useAppSelector } from "redux/hooks"
import { selectOpenSideBar } from "redux/reducers/ui/slice"

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
  margin: theme.spacing(2),
}))

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  background: theme.palette.background.body,
  marginLeft: `-${theme.measurements.sidebarwidth}px`,
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

type MainLayoutProps = React.PropsWithChildren<{}>

const Layout = (props: MainLayoutProps) => {
  const isSidebarOpen = useAppSelector(selectOpenSideBar)

  const { pathname } = useLocation()

  const isHomePage = pathname === "/"

  const { children } = props

  return (
    <Root>
      <Header ishomepage={isHomePage} />
      <Sidebar ishomepage={isHomePage} open={isSidebarOpen} />
      <Main open={isSidebarOpen}>
        <Toolbar />
        <Page>{children}</Page>
      </Main>
    </Root>
  )
}

export default Layout

export type MainLayoutType = React.FC<MainLayoutProps>

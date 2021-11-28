import React from "react"
import { styled } from "@mui/material/styles"
import { Box as MuiBox, Toolbar as MuiToolbar } from "@mui/material"

import { useAppSelector } from "redux/hooks"
import Header from "components/Header"
import Sidebar from "components/Sidebar"
import { useLocation } from "react-router-dom"

import { selectOpenSideBar } from "redux/reducers/ui/uiSlice"

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
  //background: theme.body.background,
  margin: theme.spacing(2),
}))

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  //background: theme.footer.background,
  marginLeft: `-${200}px`,
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

export type MainLayoutType = React.FC<MainLayoutProps>

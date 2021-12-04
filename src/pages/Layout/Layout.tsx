import React from "react"

import { Box as MuiBox, Toolbar as MuiToolbar } from "@mui/material"
import { styled } from "@mui/material/styles"
import Header from "components/Header"
import Sidebar, { Menu } from "components/Sidebar"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"
import { useAppSelector } from "redux/hooks"
import { selectOpenSideBar, selectSmallScreen } from "redux/reducers/ui/slice"

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
  ...(!issmallscreen && {
    marginLeft: `-${theme.measurements.sidebarwidth}px`,
  }),
  /** 
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }), */
  ...(open && {
    marginLeft: 0,
    /**
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }), */
  }),
}))

type MainLayoutProps = React.PropsWithChildren<{ header: string }>

const Layout = (props: MainLayoutProps) => {
  const isSidebarOpen = useAppSelector(selectOpenSideBar)
  const isSmallScreen = useAppSelector(selectSmallScreen)

  const { pathname } = useLocation()

  const isHomePage = React.useMemo(() => pathname === "/", [pathname])

  const { children, header } = props

  return (
    <Root>
      <Helmet title={`${header} - mhmuftee`} />
      <Header ishomepage={isHomePage} header={header} />
      <Sidebar ishomepage={isHomePage} open={isSidebarOpen} />
      <Menu />
      <Main open={isSidebarOpen} issmallscreen={isSmallScreen}>
        <Toolbar />
        <Page>{children}</Page>
      </Main>
    </Root>
  )
}

export default Layout

export type MainLayoutType = React.FC<MainLayoutProps>

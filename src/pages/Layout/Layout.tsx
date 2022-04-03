import React from "react"

import { Box, Toolbar as MuiToolbar } from "@mui/material"
import { styled } from "@mui/material/styles"
import Header from "components/Header"
import Sidebar from "components/Sidebar"
import { useSidebar } from "hooks/useSidebar"
import { Outlet } from "react-router-dom"
import TitleContextProvider from "ui/TitleContextProvider"

import Body from "./Body"

const Root = styled(Box)({
  flexGrow: 1,
  display: "flex",
  height: "100%",
})

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.measurements.appbarheight,
}))

const View = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: "100%",
  overflowY: "auto",
  //margin: theme.spacing(1),
  background: theme.palette.background.body,
}))

const Layout = () => {
  const openSidebar = useSidebar()

  return (
    <Root>
      <Sidebar open={openSidebar}></Sidebar>
      <Body putLeftMargin={!openSidebar}>
        <Toolbar />
        <View>
          <TitleContextProvider>
            <Header showMenuButton={!openSidebar} />
            <Outlet />
          </TitleContextProvider>
        </View>
      </Body>
    </Root>
  )
}

export default Layout

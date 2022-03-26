import React from "react"

import { Box, Toolbar as MuiToolbar } from "@mui/material"
import { styled } from "@mui/material/styles"
import Header from "components/Header"
import Sidebar from "components/Sidebar"
import { useSidebar } from "hooks/useSidebar"
import { Outlet } from "react-router-dom"
import TitleContextProvider from "ui/TitleContextProvider"

import Body from "./Body"

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.measurements.appbarheight,
}))

const View = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: "100%",
  margin: theme.spacing(1),
  background: theme.palette.background.paper,
}))

const Layout = () => {
  const openSidebar = useSidebar()

  return (
    <Body marginLeft={!openSidebar}>
      <Sidebar open={openSidebar}>
        <Toolbar />
      </Sidebar>
      <Toolbar />
      <View>
        <TitleContextProvider>
          <Header showMenuButton={!openSidebar} />
          <Outlet />
        </TitleContextProvider>
      </View>
    </Body>
  )
}

export default Layout

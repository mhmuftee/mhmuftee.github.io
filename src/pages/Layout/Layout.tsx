import React from "react"

import { Box, Toolbar as MuiToolbar } from "@mui/material"
import { styled } from "@mui/material/styles"
import Header from "components/Header"
import Sidebar from "components/Sidebar"
import { Outlet } from "react-router-dom"
import UiContextProvider from "ui/UIContextProvider"

import Body from "./Body"

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.measurements.appbarheight,
}))

const Root = styled(Box)({
  display: "flex",
  height: "100%",
})

const View = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: "100%",
  margin: theme.spacing(1),
  background: theme.palette.background.paper,
}))

const Layout = () => (
  <UiContextProvider>
    <Root>
      <Header />
      <Sidebar>
        <Toolbar />
      </Sidebar>
      <Body>
        <Toolbar />
        <View>
          <Outlet />
        </View>
      </Body>
    </Root>
  </UiContextProvider>
)

export default Layout

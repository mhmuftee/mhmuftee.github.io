import React, { PropsWithChildren } from "react"

import { Box as MuiBox, Toolbar as MuiToolbar } from "@mui/material"
import { styled } from "@mui/material/styles"
import Header from "components/Header"
import Menu from "components/Menu"
import Sidebar from "components/Sidebar"
import UIContextProvider from "components/UI/UIContextProvider"

import Body from "./Body"

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.measurements.appbarheight,
}))

const Root = styled(MuiBox)({
  display: "flex",
  height: "100%",
})

const View = styled(MuiBox)(({ theme }) => ({
  flexGrow: 1,
  height: "100%",
  margin: theme.spacing(1),
  background: theme.palette.background.paper,
}))

const Layout = (props: PropsWithChildren<{}>) => (
  <UIContextProvider>
    <Root>
      <Header />
      <Menu />
      <Sidebar>
        <Toolbar />
      </Sidebar>
      <Body>
        <Toolbar />
        <View>{props.children}</View>
      </Body>
    </Root>
  </UIContextProvider>
)

export default Layout

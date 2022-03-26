import React from "react"

import MuiDrawer, { DrawerProps } from "@mui/material/Drawer"
import MuiList from "@mui/material/List"
import { Theme, CSSObject, styled } from "@mui/material/styles"
import { routes } from "pages"

import NavListItem from "./NavListItem"

const Mixin = (theme: Theme): CSSObject => ({
  flexShrink: 0,
  background: theme.palette.background.body,
  width: theme.measurements.sidebarwidth,
  boxSizing: "border-box",
})

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  ...Mixin(theme),
  "& .MuiDrawer-paper": Mixin(theme),
}))

const List = styled(MuiList)<{ component?: React.ElementType }>(
  ({ theme }) => ({
    margin: theme.spacing(1),
    background: theme.palette.background.paper,
    flexGrow: 1,
    height: "100%",
  })
)

const Sidebar = (props: DrawerProps) => (
  <Drawer anchor="left" variant="persistent" {...props}>
    {props.children}
    <List component={"nav"}>
      {routes.map((routeProps, index) => (
        <NavListItem key={index} {...routeProps} />
      ))}
    </List>
  </Drawer>
)

export default Sidebar

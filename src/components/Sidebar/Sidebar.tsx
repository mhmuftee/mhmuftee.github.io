import React from "react"

import { Toolbar as MuiToolbar } from "@mui/material"
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer"
import MuiList from "@mui/material/List"
import { Theme, CSSObject, styled } from "@mui/material/styles"
import { routes } from "pages"

import NavListItem from "./NavListItem"

const Mixin = (theme: Theme): CSSObject => ({
  width: theme.measurements.sidebarwidth,
})

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  ...Mixin(theme),
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    ...Mixin(theme),
    boxSizing: "border-box",
    background: theme.palette.background.sidebar,
  },
}))

const List = styled(MuiList)<{ component?: React.ElementType }>(
  ({ theme }) => ({
    //margin: theme.spacing(1),
    background: theme.palette.background.paper,
    flexGrow: 1,
    height: "100%",
  })
)

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.measurements.appbarheight,
}))

const Sidebar = (props: DrawerProps) => {
  console.log(props.open)
  return (
    <Drawer
      PaperProps={{ elevation: 5 }}
      anchor="left"
      variant="persistent"
      {...props}
    >
      <Toolbar />
      <List component={"nav"}>
        {routes.map((routeProps, index) => (
          <NavListItem key={index} {...routeProps} />
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar

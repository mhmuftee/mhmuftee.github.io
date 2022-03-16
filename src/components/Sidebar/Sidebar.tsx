import React from "react"

import MuiDrawer, { DrawerProps } from "@mui/material/Drawer"
import MuiList from "@mui/material/List"
import { Theme, CSSObject, styled } from "@mui/material/styles"
import { Pages } from "pages"

import SidebarItem from "./SidebarItem"

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: theme.measurements.appbarheight,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  justifyContent: "flex-end",
}))

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

const List = styled(MuiList)(({ theme }) => ({
  margin: theme.spacing(1),
  background: theme.palette.background.paper,
  flexGrow: 1,
  height: "100%",
}))

const Sidebar: React.FC<DrawerProps> = (props: DrawerProps) => {
  return (
    <Drawer variant="persistent" anchor="left" {...props}>
      <DrawerHeader />
      <List>
        {Pages.map(({ path, header, icon }) => (
          <SidebarItem key={path} path={path} text={header} icon={icon} />
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar

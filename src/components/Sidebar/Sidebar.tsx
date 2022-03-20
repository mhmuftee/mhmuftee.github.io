import React, { useContext } from "react"

import MuiDrawer, { DrawerProps } from "@mui/material/Drawer"
import MuiList from "@mui/material/List"
import { Theme, CSSObject, styled } from "@mui/material/styles"
import { UIContext } from "components/UI/UIContext"
import { Pages } from "pages"

import SidebarItem from "./SidebarItem"

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
  const { children, ...drawerProps } = props
  const { isSidebarOpen } = useContext(UIContext)

  return (
    <Drawer
      anchor="left"
      open={isSidebarOpen}
      variant="persistent"
      {...drawerProps}
    >
      {children}
      <List>
        {Pages.map((pageProps, index) => (
          <SidebarItem key={index} {...pageProps} />
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar

import React from "react"

import { Divider, Hidden, IconButton, List, useTheme } from "@mui/material"
import Drawer, { DrawerProps } from "@mui/material/Drawer"
import { styled } from "@mui/material/styles"
import { Pages } from "pages"
import { ChevronsLeft, ChevronsRight } from "react-feather"
import { useAppDispatch } from "redux/hooks"
import { closeSideBar } from "redux/reducers/ui/slice"

import MobileMenu from "./MobileMenu"
import SidebarItem from "./SidebarItem"

interface SidebarProps extends DrawerProps {
  open: boolean
  istransparent: boolean
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: theme.measurements.appbarheight,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  justifyContent: "flex-end",
}))

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { istransparent, open } = props
  const theme = useTheme()
  const dispatch = useAppDispatch()

  const handleDrawerClose = () => {
    dispatch(closeSideBar())
  }

  return (
    <>
      <Hidden mdUp>
        <MobileMenu />
      </Hidden>
      <Hidden smDown>
        <Drawer
          sx={{
            width: theme.measurements.sidebarwidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: theme.measurements.sidebarwidth,
              boxSizing: "border-box",
              // background: theme.sidebar.background,
              ...(istransparent && {
                background: "transparent",
              }),
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton color="secondary" onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? <ChevronsLeft /> : <ChevronsRight />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {Pages.map(({ path, header, icon }) => (
              <SidebarItem
                key={path}
                path={path}
                text={header}
                icon={icon}
                showTooltip={!open}
              />
            ))}
          </List>
        </Drawer>
      </Hidden>
    </>
  )
}

export default Sidebar

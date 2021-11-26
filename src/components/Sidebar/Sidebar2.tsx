import React from "react"
import { styled } from "@mui/material/styles"
import { Divider, IconButton, List, useTheme } from "@mui/material"
import Drawer, { DrawerProps } from "@mui/material/Drawer"
import { Pages } from "pages"
import { ChevronsLeft, ChevronsRight } from "react-feather"
import { useAppDispatch } from "redux/hooks"
import SidebarItem from "./SidebarItem"
import { closeSideBar } from "redux/reducers/ui/uiSlice"

interface SidebarProps extends DrawerProps {
  open: boolean
  istransparent: boolean
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: theme.header.height,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  justifyContent: "flex-end",
}))

const Sidebar = (props: SidebarProps) => {
  const { istransparent, open } = props
  const theme = useTheme()
  const dispatch = useAppDispatch()

  const handleDrawerClose = () => {
    dispatch(closeSideBar())
  }

  return (
    <Drawer
      sx={{
        width: theme.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: theme.sidebar.width,
          boxSizing: "border-box",
          background: theme.sidebar.background,
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
  )
}

export default Sidebar
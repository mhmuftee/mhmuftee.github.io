import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"

import { useDispatch, useSelector } from "react-redux"

import {
  selectOpenSideBar,
  closeSideBar,
  openSideBar,
} from "redux/reducers/ui/uiSlice"

import { Pages } from "pages"
import SideBarItem from "./SidebarItem"

export default function TemporaryDrawer() {
  const anchor = "left"

  const dispatch = useDispatch()

  const isOpen = useSelector(selectOpenSideBar)

  console.log(isOpen)

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }

    const toggleSideBar = isOpen ? closeSideBar : openSideBar

    dispatch(toggleSideBar())
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {Pages.map(({ path, header, icon }) => (
          <SideBarItem
            key={path}
            path={path}
            text={header}
            icon={icon}
            showTooltip={!open}
          />
        ))}
      </List>
    </Box>
  )

  return (
    <Drawer anchor={anchor} open={isOpen} onClose={toggleDrawer}>
      {list()}
    </Drawer>
  )
}

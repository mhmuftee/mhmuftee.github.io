import React from "react"
import { Drawer, List, Toolbar } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import {
  selectOpenSideBar,
  closeSideBar,
  openSideBar,
} from "redux/reducers/ui/uiSlice"

import { SideBarPages } from "pages"

import NavItem from "./SidebarItem"

const FloatingSideBar = () => {
  const open = useSelector(selectOpenSideBar)
  const dispatch = useDispatch()
  const toggleDrawerMobile = (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }

    if (open) dispatch(closeSideBar())
    else dispatch(openSideBar())
  }

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawerMobile}>
      <Toolbar />
      <List>
        {SideBarPages.map(({ path, header, icon }) => (
          <NavItem key={path} path={path} text={header} icon={icon} />
        ))}
      </List>
    </Drawer>
  )
}

export default FloatingSideBar

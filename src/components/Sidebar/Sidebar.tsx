import React from "react"

import { Hidden, List, useTheme } from "@mui/material"
import Drawer, { DrawerProps } from "@mui/material/Drawer"
import { styled } from "@mui/material/styles"
import { Pages } from "pages"
import { useAppDispatch } from "redux/hooks"
import { closeSideBar, openSideBar } from "redux/reducers/ui/slice"

import MobileMenu from "./MobileMenu"
import SidebarItem from "./SidebarItem"

interface SidebarProps extends DrawerProps {
  open: boolean
  ishomepage: boolean
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
  const { ishomepage, open } = props
  const theme = useTheme()
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const dispatchfunc = ishomepage ? closeSideBar : openSideBar
    dispatch(dispatchfunc())
  }, [dispatch, ishomepage])

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
              background: theme.palette.background.sidebar,
              ...(ishomepage && {
                background: "transparent",
              }),
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader />
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

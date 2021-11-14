import React from "react"
import { styled, Theme, CSSObject } from "@mui/material/styles"
import Button from "@mui/material/Button"
import MuiDrawer from "@mui/material/Drawer"
import { useDispatch, useSelector } from "react-redux"
import List from "@mui/material/List"
import Hidden from "@mui/material/Hidden"
import Typography from "@mui/material/Typography"
import LeftIcon from "@mui/icons-material/ChevronLeft"
import RightIcon from "@mui/icons-material/ChevronRight"

import {
  closeSideBar,
  openSideBar,
  selectOpenSideBar,
} from "redux/reducers/ui/uiSlice"

import { SideBarPages } from "pages"
import { BUTTON_SLIDER } from "utils/constants"
import Tooltip from "../Tooltip"

import NavItem from "./SidebarItem"

const openedMixin = (theme: Theme): CSSObject => ({
  width: theme.sidebar.width,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
})

const DrawerHeader = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  paddingTop: theme.spacing(2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const Filler = styled("div")({
  flexGrow: 1,
})

const Slider = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: 0,
  height: theme.footer.height,
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: theme.sidebar.width,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}))

export default function MiniDrawer() {
  const open = useSelector(selectOpenSideBar)
  const dispatch = useDispatch()
  const SliderIcon = open ? LeftIcon : RightIcon
  const toggleDrawer = () =>
    open ? dispatch(closeSideBar()) : dispatch(openSideBar())

  return (
    <Hidden smDown implementation="css">
      <Drawer variant="permanent" open={open}>
        <DrawerHeader />
        <List>
          {SideBarPages.map(({ path, header, icon }) => (
            <NavItem
              key={path}
              path={path}
              text={header}
              icon={icon}
              showTooltip={!open}
            />
          ))}
        </List>
        <Filler />
        <Tooltip title={open ? "" : "Open sidebar"}>
          <Slider
            variant="contained"
            onClick={toggleDrawer}
            color="secondary"
            startIcon={<SliderIcon />}
          >
            {open && <Typography variant="body2">{BUTTON_SLIDER}</Typography>}
          </Slider>
        </Tooltip>
      </Drawer>
    </Hidden>
  )
}

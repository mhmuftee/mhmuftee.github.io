import * as React from "react"

import {
  AppBar,
  Dialog,
  useMediaQuery,
  Theme,
  Toolbar,
  IconButton,
} from "@mui/material"
import List from "@mui/material/List"
import Transtion from "components/Transition"
import { Pages } from "pages"
import { X as CloseIcon } from "react-feather"
import { useAppSelector } from "redux/hooks"
import { useAppDispatch } from "redux/hooks"
import { selectOpenSideBar } from "redux/reducers/ui/slice"
import { closeSideBar } from "redux/reducers/ui/slice"

import SidebarItem from "./SidebarItem"

const SimpleDialog = () => {
  const dispatch = useAppDispatch()

  const open = useAppSelector(selectOpenSideBar)

  const fullScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  )

  const handleClose = () => {
    dispatch(closeSideBar())
  }

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullScreen={fullScreen}
      TransitionComponent={Transtion}
    >
      <AppBar
        sx={{ position: "relative", background: "transparent" }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
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
    </Dialog>
  )
}

export default SimpleDialog

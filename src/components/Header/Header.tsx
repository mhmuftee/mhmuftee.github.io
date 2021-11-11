import React from "react"
import { styled } from "@mui/material/styles"
import {
  AppBar,
  Toolbar as MuiToolbar,
  IconButton,
  Hidden,
} from "@mui/material"
import { useAppDispatch } from "redux/hooks"
import { openSideBarMobile } from "redux/reducers/ui/uiSlice"
import { Brightness4, Menu } from "@mui/icons-material"
import Tooltip from "components/Tooltip"

const Filler = styled("div")({
  flexGrow: 1,
})

const Header = styled(AppBar)(({ theme }) => ({
  minHeight: theme.header.height,
  background: theme.header.background,
  padding: "0 !important",
}))

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.header.height,
}))

const HeaderFC = () => {
  const dispatch = useAppDispatch()

  return (
    <Header position="fixed" elevation={0}>
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => dispatch(openSideBarMobile())}
          >
            <Menu />
          </IconButton>
        </Hidden>
        <Filler />
        <Tooltip title="change theme" aria-label="change theme">
          <IconButton
            edge="end"
            aria-label="change theme"
            aria-haspopup="true"
            color="primary"
          >
            <Brightness4 />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </Header>
  )
}

export default HeaderFC

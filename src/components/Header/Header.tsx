import React from "react"

import { Toolbar as MuiToolbar, IconButton } from "@mui/material"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import { styled } from "@mui/material/styles"
import Tooltip from "components/Tooltip"
import {
  AlignLeft as Menu,
  Moon as Night,
  Sun as Day,
  X as Close,
} from "react-feather"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import {
  openMenu,
  closeMenu,
  changeTheme,
  selectOpenMenu,
  selectThemeMode,
  selectSmallScreen,
} from "redux/reducers/ui/slice"

const Filler = styled("div")({
  flexGrow: 1,
})

interface AppBarProps extends MuiAppBarProps {
  ishomepage: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "ishomepage",
})<AppBarProps>(({ theme, ishomepage }) => ({
  background: theme.palette.background.header,
  minHeight: theme.measurements.appbarheight,
  padding: "0 !important",
  zIndex: theme.zIndex.drawer + 1,
  ...(ishomepage && {
    background: "transparent",
  }),
}))

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.measurements.appbarheight,
}))

const HeaderComponent = (props: AppBarProps) => {
  const dispatch = useAppDispatch()
  const { ishomepage } = props
  const themeMode = useAppSelector(selectThemeMode)
  const open = useAppSelector(selectOpenMenu)
  const elavation = ishomepage ? 0 : 3

  const Themeicon = themeMode === "dark" ? Day : Night

  const isSmallScreen = useAppSelector(selectSmallScreen)

  const handleChangeTheme = () => {
    const mode = themeMode === "dark" ? "light" : "dark"
    dispatch(changeTheme(mode))
  }

  const handleClick = () => {
    const func = open ? closeMenu : openMenu
    dispatch(func())
  }

  return (
    <AppBar position="fixed" elevation={elavation} ishomepage={ishomepage}>
      <Toolbar>
        <IconButton
          edge="start"
          color="primary"
          aria-label="open drawer"
          sx={{ ...(!ishomepage && !isSmallScreen && { display: "none" }) }}
          onClick={handleClick}
        >
          {open ? <Close /> : <Menu />}
        </IconButton>
        <Filler />
        <Tooltip title="change theme" aria-label="change theme">
          <IconButton
            edge="end"
            aria-label="change theme"
            aria-haspopup="true"
            color="primary"
            id="mode"
            onClick={handleChangeTheme}
          >
            <Themeicon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderComponent

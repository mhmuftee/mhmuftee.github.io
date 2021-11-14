import React from "react"
import { styled } from "@mui/material/styles"
import { Toolbar as MuiToolbar, IconButton } from "@mui/material"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import { Menu, Moon as Night, Sun as Day } from "react-feather"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import {
  openSideBar,
  changeTheme,
  selectThemeMode,
} from "redux/reducers/ui/uiSlice"
import Tooltip from "components/Tooltip"

const Filler = styled("div")({
  flexGrow: 1,
})

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<MuiAppBarProps>(({ theme, color }) => ({
  color: color === "transparent" ? color : "default",
  background: color === "transparent" ? "default" : theme.header.background,
  minHeight: theme.header.height,
  padding: "0 !important",
}))

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.header.height,
}))

type HeaderProps = {
  transparent: Boolean
}

const HeaderComponent = (props: HeaderProps) => {
  const dispatch = useAppDispatch()
  const { transparent } = props
  const themeMode = useAppSelector(selectThemeMode)

  const Themeicon = themeMode === "dark" ? Day : Night

  const handleChangeTheme = () => {
    if (themeMode === "dark") dispatch(changeTheme("light"))
    if (themeMode === "light") dispatch(changeTheme("dark"))
  }

  const headerColor = transparent ? "transparent" : "default"

  return (
    <>
      <AppBar position="fixed" elevation={0} color={headerColor}>
        <Toolbar>
          <IconButton
            edge="start"
            color="secondary"
            aria-label="open drawer"
            onClick={() => dispatch(openSideBar())}
          >
            <Menu />
          </IconButton>
          <Filler />
          <Tooltip title="change theme" aria-label="change theme">
            <IconButton
              edge="end"
              aria-label="change theme"
              aria-haspopup="true"
              color="secondary"
              id="mode"
              onClick={handleChangeTheme}
            >
              <Themeicon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </>
  )
}

HeaderComponent.defaultProps = {
  transparent: false,
}

export default HeaderComponent

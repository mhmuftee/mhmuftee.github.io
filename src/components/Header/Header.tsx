import React from "react"
import { styled } from "@mui/material/styles"
import {
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  IconButton,
} from "@mui/material"
import { Menu, Moon as Night, Sun as Day } from "react-feather"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import {
  openSideBarMobile,
  changeTheme,
  selectThemeMode,
} from "redux/reducers/ui/uiSlice"
import Tooltip from "components/Tooltip"

const Filler = styled("div")({
  flexGrow: 1,
})

const NormalAppBar = styled(MuiAppBar)(({ theme }) => ({
  minHeight: theme.header.height,
  background: theme.header.background,
  padding: "0 !important",
}))

const TransparentAppBar = styled(MuiAppBar)(({ theme }) => ({
  minHeight: theme.header.height,
  color: "transparent",
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

  const AppBar = transparent ? TransparentAppBar : NormalAppBar

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            color="secondary"
            aria-label="open drawer"
            onClick={() => dispatch(openSideBarMobile())}
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
      <Toolbar />
    </>
  )
}

HeaderComponent.defaultProps = {
  transparent: false,
}

export default HeaderComponent

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

interface AppBarProps extends MuiAppBarProps {
  issidebaropen: boolean
  istransparent: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) =>
    prop !== "issidebaropen" && prop !== "istransparent",
})<AppBarProps>(({ theme, issidebaropen, istransparent }) => ({
  background: theme.header.background,
  minHeight: theme.header.height,
  padding: "0 !important",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(issidebaropen && {
    width: `calc(100% - ${theme.sidebar.width}px)`,
    marginLeft: `${theme.sidebar.width}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(istransparent && {
    background: "transparent",
  }),
}))

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.header.height,
}))

const HeaderComponent = (props: AppBarProps) => {
  const dispatch = useAppDispatch()
  const { istransparent, issidebaropen } = props
  const themeMode = useAppSelector(selectThemeMode)

  const Themeicon = themeMode === "dark" ? Day : Night

  const handleChangeTheme = () => {
    const mode = themeMode === "dark" ? "light" : "dark"
    dispatch(changeTheme(mode))
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        issidebaropen={issidebaropen}
        istransparent={istransparent}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="secondary"
            aria-label="open drawer"
            sx={{ mr: 2, ...(issidebaropen && { display: "none" }) }}
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

export default HeaderComponent

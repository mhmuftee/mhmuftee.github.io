import React from "react"

import { Zoom, useTheme } from "@mui/material"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import { styled } from "@mui/material/styles"
import MuiToolbar from "@mui/material/Toolbar"
import MuiTypography, { TypographyProps } from "@mui/material/Typography"
import { UIContext } from "components/UI/UIContext"
import { Menu, AlignLeft, X } from "react-feather"
import { useLocation, matchPath } from "react-router-dom"

import MenuButton from "./RotatingButton"
import ThemeButton from "./ThemeButton"

const Filler = styled("div")({
  flexGrow: 1,
})
interface AppBarProps extends MuiAppBarProps {
  isHomePage?: boolean
}

const Typography = styled(MuiTypography, {
  shouldForwardProp: (prop) => prop !== "hide",
})<{ hide?: boolean } & TypographyProps>(({ hide }) => ({
  margin: "auto",
  ...(hide && { display: "none" }),
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "isHomePage",
})<AppBarProps>(({ theme, isHomePage }) => ({
  background: theme.palette.background.header,
  minHeight: theme.measurements.appbarheight,
  padding: "0 !important",
  zIndex: theme.zIndex.drawer + 1,
  ...(isHomePage && {
    background: "transparent",
  }),
}))

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.measurements.appbarheight,
}))

const Header = (props: AppBarProps) => {
  const { title } = props
  const { isMenuOpen, menuClickHandler, isSidebarOpen, isHomePage } =
    React.useContext(UIContext)
  const elavation = isHomePage ? 0 : 3
  const theme = useTheme()

  const location = useLocation()
  const zoom = !!matchPath(location.pathname, `/${title?.toLocaleLowerCase()}`)

  const MenuIcon = isMenuOpen ? X : isHomePage ? Menu : AlignLeft

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  return (
    <AppBar position="fixed" elevation={elavation} isHomePage={isHomePage}>
      <Toolbar>
        <>
          <MenuButton
            edge="start"
            color="primary"
            clicked={isMenuOpen}
            hidden={isSidebarOpen}
            onClick={menuClickHandler}
          >
            <MenuIcon />
          </MenuButton>
          <Typography variant="h6" hide={!isHomePage}>
            {isMenuOpen ? "Close" : "Menu"}
          </Typography>
        </>
        <Filler />
        <Zoom
          in={zoom}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${transitionDuration.exit}ms`,
          }}
          unmountOnExit
        >
          <Typography variant="h4" hide={isHomePage}>
            {title}
          </Typography>
        </Zoom>
        <Filler />
        <ThemeButton />
      </Toolbar>
    </AppBar>
  )
}

export default Header

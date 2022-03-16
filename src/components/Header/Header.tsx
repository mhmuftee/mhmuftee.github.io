import React, { useCallback, useState } from "react"

import { Zoom, useTheme } from "@mui/material"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import { styled } from "@mui/material/styles"
import MuiToolbar from "@mui/material/Toolbar"
import MuiTypography, { TypographyProps } from "@mui/material/Typography"
import { Menu, AlignLeft, X as Close } from "react-feather"
import { Helmet } from "react-helmet-async"
import { useLocation, matchPath } from "react-router-dom"

import MenuPopUp from "./Menu"
import MenuButton from "./MenuButton"
import ThemeButton from "./ThemeButton"

const Filler = styled("div")({
  flexGrow: 1,
})
interface AppBarProps extends MuiAppBarProps {
  title?: string
  isHomePage?: boolean
  isSmallScreen?: boolean
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
  const { title, isHomePage, isSmallScreen } = props
  const elavation = isHomePage ? 0 : 3
  const theme = useTheme()

  const location = useLocation()
  const zoom = !!matchPath(location.pathname, `/${title?.toLocaleLowerCase()}`)

  const [open, setOpen] = useState(false)

  const MenuIcon = isHomePage ? Menu : AlignLeft

  const handleMenuClick = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  const onClose = useCallback(() => {
    setOpen(false)
  }, [])

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  return (
    <AppBar position="fixed" elevation={elavation} isHomePage={isHomePage}>
      <Helmet>
        <title>{`${title} - mhmuftee`}</title>
      </Helmet>
      <Toolbar>
        <>
          <MenuButton
            edge="start"
            clicked={open}
            aria-label="open drawer"
            onClick={handleMenuClick}
            hidden={!isHomePage && !isSmallScreen}
          >
            {open ? <Close /> : <MenuIcon />}
          </MenuButton>
          <Typography variant="h6" hide={!isHomePage}>
            {open ? "Close" : "Menu"}
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
      <MenuPopUp onClick={onClose} open={open} fullScreen={isSmallScreen} />
    </AppBar>
  )
}

export default Header

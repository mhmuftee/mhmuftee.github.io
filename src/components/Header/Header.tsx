import React, { useMemo } from "react"

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import { styled } from "@mui/material/styles"
import MuiToolbar from "@mui/material/Toolbar"
import { useHomePage } from "hooks/useHomePage"

import MenuButton from "./MenuButton"
import ThemeButton from "./ThemeButton"
import Title from "./Title"

interface AppBarProps extends MuiAppBarProps {
  transparent?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "transparent",
})<AppBarProps>(({ theme, transparent }) => ({
  background: transparent ? "transparent" : theme.palette.background.header,
  minHeight: theme.measurements.appbarheight,
  padding: "0 !important",
  zIndex: theme.zIndex.drawer + 1,
}))

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.measurements.appbarheight,
  justifyContent: "space-between",
}))

type HeaderProps = {
  showMenuButton: boolean
}

const Header = (props: HeaderProps) => {
  const { showMenuButton } = props

  const isHomePage = useHomePage()

  const elevation = useMemo(() => (isHomePage ? 0 : 3), [isHomePage])

  return (
    <AppBar position="fixed" elevation={elevation} transparent={isHomePage}>
      <Toolbar>
        {showMenuButton && <MenuButton edge="start" color="primary" />}
        {!isHomePage && <Title />}
        <ThemeButton edge="end" color="primary" />
      </Toolbar>
    </AppBar>
  )
}

export default Header

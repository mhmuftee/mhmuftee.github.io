import React from "react"

import { useTheme } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import Tooltip from "components/Tooltip"
import { Moon as Night, Sun as Day } from "react-feather"
import { ThemeContext } from "theme/ThemeProvider"

const ThemeButton = () => {
  const theme = useTheme()

  const themeContext = React.useContext(ThemeContext)
  const ThemeIcon = theme.palette.mode === "dark" ? Day : Night

  return (
    <Tooltip title="change theme" aria-label="change theme" placement="left">
      <IconButton
        edge="end"
        aria-label="change theme"
        color="primary"
        onClick={themeContext.changeTheme}
      >
        <ThemeIcon />
      </IconButton>
    </Tooltip>
  )
}

export default ThemeButton

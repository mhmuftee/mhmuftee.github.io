import React, { useMemo } from "react"

import { useTheme } from "@mui/material"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import Tooltip from "components/Tooltip"
import { Moon as Night, Sun as Day } from "react-feather"
import { ThemeContext } from "theme/ThemeProvider"

const ThemeButton = (props: IconButtonProps) => {
  const {
    palette: { mode },
  } = useTheme()

  const { changeTheme } = React.useContext(ThemeContext)
  const ThemeIcon = useMemo(() => (mode === "dark" ? Day : Night), [mode])

  return (
    <Tooltip title="change theme" placement="left">
      <IconButton aria-label="change theme" onClick={changeTheme} {...props}>
        <ThemeIcon />
      </IconButton>
    </Tooltip>
  )
}

export default ThemeButton

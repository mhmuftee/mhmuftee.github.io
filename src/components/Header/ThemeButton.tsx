import React, { useMemo } from "react"

import { useTheme } from "@mui/material"
import RotateButton, { RotateButtonProps } from "components/common/RotateButton"
import Tooltip from "components/common/Tooltip"
import { Moon as Night, Sun as Day } from "react-feather"
import { ThemeContext } from "theme/ThemeProvider"

const ThemeButton = (props: RotateButtonProps) => {
  const {
    palette: { mode },
  } = useTheme()

  const { changeTheme } = React.useContext(ThemeContext)

  const ThemeIcon = useMemo(() => (mode === "dark" ? Day : Night), [mode])

  return (
    <Tooltip title="change theme" placement="bottom-start">
      <RotateButton aria-label="change theme" onClick={changeTheme} {...props}>
        <ThemeIcon />
      </RotateButton>
    </Tooltip>
  )
}

export default ThemeButton

import React, { useCallback, useMemo, useState } from "react"

import { useTheme } from "@mui/material"
import RotateButton, { RotateButtonProps } from "components/common/RotateButton"
import Tooltip from "components/common/Tooltip"
import { useHomePage } from "hooks/useHomePage"
import { Moon as Night, Sun as Day } from "react-feather"
import { ThemeContext } from "theme/ThemeProvider"

const ThemeButton = (props: RotateButtonProps) => {
  const theme = useTheme()
  const isHomePage = useHomePage()

  const mode = theme.palette.mode

  const { changeTheme } = React.useContext(ThemeContext)

  const [clicked, setClicked] = useState(false)

  const onClick = useCallback(() => {
    setClicked(mode === "dark")
    changeTheme()
  }, [changeTheme, mode])

  const ThemeIcon = useMemo(() => (mode === "dark" ? Day : Night), [mode])

  const color =
    isHomePage && mode === "light" ? "default" : theme.palette.common.white

  return (
    <Tooltip title="change theme" placement="bottom-start">
      <RotateButton
        clicked={clicked}
        aria-label="change theme"
        onClick={onClick}
        sx={{ color }}
        {...props}
      >
        <ThemeIcon />
      </RotateButton>
    </Tooltip>
  )
}

export default ThemeButton

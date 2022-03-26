import React, { useCallback, useMemo, useState } from "react"

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

  const [clicked, setClicked] = useState(false)

  const onClick = useCallback(() => {
    setClicked(mode === "dark")
    changeTheme()
  }, [changeTheme, mode])

  const ThemeIcon = useMemo(() => (mode === "dark" ? Day : Night), [mode])

  return (
    <Tooltip title="change theme" placement="bottom-start">
      <RotateButton
        clicked={clicked}
        aria-label="change theme"
        onClick={onClick}
        {...props}
      >
        <ThemeIcon />
      </RotateButton>
    </Tooltip>
  )
}

export default ThemeButton

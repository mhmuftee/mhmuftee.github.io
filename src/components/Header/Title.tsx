import React from "react"

import { Zoom, useTheme, Typography } from "@mui/material"
import { useLocation } from "react-router-dom"

const Title = () => {
  const {
    state: { header = "" },
  } = useLocation()

  const theme = useTheme()

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  return (
    <Zoom
      in={true}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${transitionDuration.exit}ms`,
      }}
      unmountOnExit
    >
      <Typography variant="h4" sx={{ margin: "auto" }}>
        {header}
      </Typography>
    </Zoom>
  )
}

export default Title

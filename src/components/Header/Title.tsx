import React, { useContext } from "react"

import { Zoom, useTheme, Typography } from "@mui/material"
import { UIContext } from "ui"

const Title = () => {
  const theme = useTheme()

  const { title } = useContext(UIContext)

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  return (
    <Zoom
      key={title}
      in={true}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${transitionDuration.exit}ms`,
      }}
      unmountOnExit
    >
      <Typography variant="h4" sx={{ margin: "auto" }}>
        {title}
      </Typography>
    </Zoom>
  )
}

export default Title

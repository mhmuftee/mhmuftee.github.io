import React from "react"

import { Zoom, useTheme, Typography } from "@mui/material"

type TitleProps = {
  title: string
}

const Title = (props: TitleProps) => {
  const { title } = props
  const theme = useTheme()

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

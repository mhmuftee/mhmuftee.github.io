import React, { PropsWithChildren } from "react"

import { styled } from "@mui/material/styles"

interface BodyProps {
  putLeftMargin?: boolean
}

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "putLeftMargin",
})<BodyProps>(({ theme, putLeftMargin }) => ({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: theme.palette.background.body,
  ...(putLeftMargin && {
    marginLeft: `-${theme.measurements.sidebarwidth}px`,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
  ...(!putLeftMargin && {
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Body = (props: PropsWithChildren<BodyProps>) => {
  const { children, ...bprops } = props

  return <Main {...bprops}>{children}</Main>
}

export default Body

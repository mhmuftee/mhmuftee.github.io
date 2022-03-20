import React, { PropsWithChildren, useContext } from "react"

import { styled } from "@mui/material/styles"
import { UIContext } from "ui"

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "isSidebarOpen",
})<{
  isSidebarOpen?: boolean
}>(({ theme, isSidebarOpen }) => ({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: theme.palette.background.body,
  ...(!isSidebarOpen && {
    marginLeft: `-${theme.measurements.sidebarwidth}px`,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
  ...(isSidebarOpen && {
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Body = (props: PropsWithChildren<{}>) => {
  const { isSidebarOpen } = useContext(UIContext)
  return <Main isSidebarOpen={isSidebarOpen}>{props.children}</Main>
}

export default Body

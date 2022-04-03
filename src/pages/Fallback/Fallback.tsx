import React from "react"

import { CircularProgress } from "@mui/material"
import { styled } from "@mui/material/styles"

const Details = styled("div")(({ theme }) => ({
  top: 0,
  left: 0,
  flexGrow: 1,
  width: "100%",
  height: "100%",
  margin: "auto",
  display: "flex",
  position: "fixed",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  justifyContent: "center",
  background: theme.palette.background.body,
  zIndex: theme.zIndex.appBar + 5,
}))

const Fallback = () => {
  return (
    <Details>
      <CircularProgress color="primary" />
    </Details>
  )
}

export default Fallback

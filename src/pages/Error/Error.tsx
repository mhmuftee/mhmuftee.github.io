import React from "react"

import { Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"
import Particles from "react-tsparticles"
import { getParticlesOptions } from "theme/createTheme"
import { ISourceOptions } from "tsparticles"

const Details = styled("div")(() => ({
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
}))

const Error = () => {
  const theme = useTheme()

  const particlesOptions = getParticlesOptions(theme) as ISourceOptions

  return (
    <>
      <Particles options={particlesOptions} />
      <Details>
        <Typography align="center" variant="h1">
          could not load, try again later
        </Typography>
      </Details>
    </>
  )
}

export default Error

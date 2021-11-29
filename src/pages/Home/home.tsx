import React from "react"

import { Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"
import Particles from "react-tsparticles"
import { ISourceOptions } from "tsparticles"

import { getDarkParticlesOptions } from "./darkParticles"
import { getParticlesOptions } from "./particles"

const Details = styled("div")(() => ({
  margin: "auto",
  alignContent: "center",
  minHeight: "100%",
  width: "100%",
  position: "fixed",
}))

const HomeComponent = () => {
  const theme = useTheme()

  const particlesOptions =
    theme.palette.mode === "dark"
      ? getDarkParticlesOptions(theme)
      : getParticlesOptions(theme)
  return (
    <>
      <Particles options={particlesOptions as ISourceOptions} />
      <Details>
        <Typography variant="h1">To be implemented in Future</Typography>
      </Details>
    </>
  )
}

export default HomeComponent

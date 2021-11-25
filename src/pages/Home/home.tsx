import React from "react"
import Particles from "react-tsparticles"
import { ISourceOptions } from "tsparticles"
import { styled } from "@mui/material/styles"
import { Typography, useMediaQuery } from "@mui/material"
import { getParticlesOptions } from "./particles"
import { getDarkParticlesOptions } from "./darkParticles"
import { useTheme } from "@mui/material/styles"

const Details = styled("div")(() => ({
  margin: "auto",
  alignContent: "center",
  minHeight: "100vh",
  width: "100vw",
  position: "fixed",
}))

const HomeComponent = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const variant = matches ? "h2" : "h1"

  const particlesOptions =
    theme.palette.mode === "dark"
      ? getDarkParticlesOptions(theme)
      : getParticlesOptions(theme)
  return (
    <>
      <Particles options={particlesOptions as ISourceOptions} />
      <Details>
        <Typography variant={variant}> To be implemented in Future</Typography>
      </Details>
    </>
  )
}

export default HomeComponent

import React from "react"
import Particles from "react-tsparticles"
import Header from "components/Header"
import { ISourceOptions } from "tsparticles"
import { styled } from "@mui/material/styles"
import { Typography, useMediaQuery } from "@mui/material"
import { getParticlesOptions } from "./particles"
import { getDarkParticlesOptions } from "./darkParticles"
import { useTheme } from "@mui/material/styles"

const Details = styled("div")(() => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  flex: 1,
  flexDirection: "column",
  minHeight: "100vh",
  minWidth: "100vw",
  overflow: "hidden",
  position: "fixed",
}))

const Root = styled("div")({
  display: "flex",
  height: "100vh",
})

const HomeComponent = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const variant = matches ? "h2" : "h1"
  const particlesOptions =
    theme.palette.mode === "dark"
      ? getDarkParticlesOptions(theme)
      : getParticlesOptions(theme)
  return (
    <Root>
      <Header transparent={true} />
      <Particles options={particlesOptions as ISourceOptions} />
      <Details>
        <Typography variant={variant}> To be implemented in Future</Typography>
      </Details>
    </Root>
  )
}

export default HomeComponent

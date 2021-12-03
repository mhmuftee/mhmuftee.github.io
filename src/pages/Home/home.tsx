import * as React from "react"

import { GitHub, LinkedIn } from "@mui/icons-material"
import { IconButton, LinearProgress, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"
import Footer from "components/Footer"
import Particles from "react-tsparticles"
import { ISourceOptions } from "tsparticles"

import { getDarkParticlesOptions } from "./darkParticles"
import { getParticlesOptions } from "./particles"

const Links = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  flexDirection: "row",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
}))

const Details = styled("div")(() => ({
  flexGrow: 1,
  margin: "auto",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  position: "fixed",
}))

const HomeComponent = () => {
  const theme = useTheme()
  const linkedinUrl = String(process.env.PROFILE_LINKEDIN)
  const githubUrl = String(process.env.PROFILE_GITHUB)
  const particlesOptions =
    theme.palette.mode === "dark"
      ? getDarkParticlesOptions(theme)
      : getParticlesOptions(theme)
  return (
    <>
      <Particles options={particlesOptions as ISourceOptions} />
      <Details>
        <Typography align="center" variant="h1">
          Mahfuzul Haque
        </Typography>
        <LinearProgress color="secondary" />
        <Typography align="center" variant="h3">
          Student, Software Engineer
        </Typography>
        <Links>
          <IconButton aria-label="github" href={githubUrl} target="_blank">
            <GitHub fontSize="large" sx={{ m: 1 }} />
          </IconButton>
          <IconButton aria-label="linkedin" href={linkedinUrl} target="_blank">
            <LinkedIn fontSize="large" sx={{ m: 1 }} />
          </IconButton>
        </Links>
      </Details>
      <Footer />
    </>
  )
}

export default HomeComponent

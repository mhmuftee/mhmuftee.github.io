import React from "react"

import { GitHub, LinkedIn } from "@mui/icons-material"
import { IconButton, LinearProgress, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"
import Tooltip from "components/common/Tooltip"
import Footer from "components/Footer"
import Particles from "react-tsparticles"
import { getParticlesOptions } from "theme/createTheme"
import { ISourceOptions } from "tsparticles"

const Links = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  flexDirection: "row",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",

  display: "flex",
}))

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

const Home = () => {
  const theme = useTheme()

  const githubUrl = String(process.env.PROFILE_GITHUB)
  const linkedinUrl = String(process.env.PROFILE_LINKEDIN)

  const particlesOptions = getParticlesOptions(theme) as ISourceOptions

  const links = [
    { name: "GitHub", Icon: GitHub, href: githubUrl },
    { name: "LinkedIn", Icon: LinkedIn, href: linkedinUrl },
  ]

  return (
    <>
      <Particles options={particlesOptions} />
      <Details>
        <Typography align="center" variant="h1">
          Mahfuzul Haque
        </Typography>
        <LinearProgress />
        <Typography align="center" variant="h3">
          Student, Software Engineer
        </Typography>
        <Links>
          {links.map(({ name, Icon, href }) => (
            <Tooltip key={name} title={`Go to ${name} profile`}>
              <IconButton aria-label={name} href={href} target="_blank">
                <Icon fontSize="large" sx={{ m: 1 }} />
              </IconButton>
            </Tooltip>
          ))}
        </Links>
      </Details>
      <Footer />
    </>
  )
}

export default Home

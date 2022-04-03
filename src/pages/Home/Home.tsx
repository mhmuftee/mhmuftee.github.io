import React from "react"

import { GitHub, LinkedIn } from "@mui/icons-material"
import { IconButton, LinearProgress, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"
import Tooltip from "components/common/Tooltip"
import Footer from "components/Footer"
import { useFetch } from "hooks/useFetch"
import Fallback from "pages/Fallback"
import Particles from "react-tsparticles"
import { getParticlesOptions } from "theme/createTheme"
import { ISourceOptions } from "tsparticles"
import { IPerson } from "types"

import ErrorPage from "../Error"

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

  const { data, isError, isLoading } = useFetch("/person", {} as IPerson)

  const { profession, githubURL, linkedinURL, name } = data

  const particlesOptions = getParticlesOptions(theme) as ISourceOptions

  const links = [
    { link: "GitHub", Icon: GitHub, href: githubURL },
    { link: "LinkedIn", Icon: LinkedIn, href: linkedinURL },
  ]

  console.log(isLoading)

  return isError ? (
    <ErrorPage />
  ) : isLoading ? (
    <Fallback />
  ) : (
    <>
      <Particles options={particlesOptions} />
      <Details>
        <Typography align="center" variant="h1">
          {name}
        </Typography>
        <LinearProgress />
        <Typography align="center" variant="h3">
          {profession}
        </Typography>
        <Links>
          {links.map(({ link, Icon, href }) => {
            const title = `Go to ${link} profile`
            return (
              <Tooltip key={link} title={title}>
                <IconButton aria-label={title} href={href} target="_blank">
                  <Icon fontSize="large" sx={{ m: 1 }} />
                </IconButton>
              </Tooltip>
            )
          })}
        </Links>
      </Details>
      <Footer name={name} />
    </>
  )
}

export default Home

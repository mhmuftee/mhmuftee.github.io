import React from "react"

import { Box, Paper, Grid } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useFetch } from "hooks/useFetch"
import ErrorPage from "pages/Error"
import LoadingPage from "pages/Fallback"
import { ISkill } from "types"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.h3,
  padding: theme.spacing(10),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

const SkillsPage = () => {
  const { data, isError, isLoading } = useFetch("/skills", [])

  const skills = data as ISkill[]

  console.log(skills)

  return isError ? (
    <ErrorPage />
  ) : isLoading ? (
    <LoadingPage />
  ) : (
    <Box
      sx={{
        flexGrow: 1,
        height: "100%",
        background: "black",
        overflowY: "auto",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        spacing={3}
      >
        {skills.map((sk, index) => (
          <Grid item xs={6} key={index}>
            <Item>{sk.name}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default SkillsPage

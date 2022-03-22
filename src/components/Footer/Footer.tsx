import React from "react"

import { Copyright } from "@mui/icons-material"
import { Link as MuiLink, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const Line = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  bottom: 0,
  left: 0,
  position: "fixed",
  padding: theme.spacing(0.5, 1),
  [theme.breakpoints.down("tablet")]: {
    padding: theme.spacing(0.5, 0.5),
  },
}))

const Info = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "space-between",
  flexDirection: "row",
}))

const Link = styled(MuiLink)(({ theme }) => ({
  paddingRight: theme.spacing(0.5),
  [theme.breakpoints.down("tablet")]: {
    padding: theme.spacing(0.2),
  },
}))

const Footer = () => {
  const year = new Date().getFullYear()

  const url = String(process.env.REPO_SOURCE_CODE)

  return (
    <Line>
      <Info>
        <Copyright fontSize="small" color="primary" />
        &nbsp;
        <Typography variant="body1" color="primary">
          {year} Mahfuzul Haque
        </Typography>
      </Info>
      <Link
        href={url}
        underline="hover"
        variant="body1"
        color="primary"
        target="_blank"
      >
        Source code
      </Link>
    </Line>
  )
}

export default Footer

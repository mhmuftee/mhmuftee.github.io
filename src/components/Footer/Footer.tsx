import React from "react"

import { Copyright } from "@mui/icons-material"
import { Link, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const Footer = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  bottom: 0,
  left: 0,
  position: "fixed",
  padding: theme.spacing(1),
}))

const Info = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "flex-end",
  flexDirection: "row",
  paddingLeft: theme.spacing(1),
}))

const FooterFC = () => {
  const year = new Date().getFullYear()
  const url = String(process.env.REPO_SOURCE_CODE)
  return (
    <Footer>
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
        sx={{ pr: 1 }}
        target="_blank"
      >
        Source code
      </Link>
    </Footer>
  )
}

export default FooterFC

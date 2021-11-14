import React, { FC, PropsWithChildren } from "react"
import { styled } from "@mui/material/styles"
import { Toolbar as MuiToolbar } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import Header from "components/Header"
import { FloatingSidebar } from "components/Sidebar"

const Root = styled("div")({
  display: "flex",
  height: "100vh",
})

const MainContent = styled("main")({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
})

const Page = styled("div")(({ theme }) => ({
  flexGrow: 1,
  background: theme.body.background,
  // backgroundImage:
  //  "url(https://source.unsplash.com/collection/21649636/1600x900)",
  padding: theme.spacing(2),
  // overflowY: "auto",
  overflowX: "hidden",
  height: "100%",
}))

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.header.height,
}))

type MainLayoutProps = PropsWithChildren<{}>

export default function MainLayoutView(props: MainLayoutProps) {
  const { children } = props

  return (
    <Root>
      <CssBaseline />
      <Header />
      <FloatingSidebar />
      <MainContent>
        <Toolbar />
        <Page>{children}</Page>
      </MainContent>
    </Root>
  )
}

export type MainLayoutType = FC<MainLayoutProps>

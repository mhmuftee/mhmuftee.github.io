import React, { FC, PropsWithChildren } from "react"
import { styled } from "@mui/material/styles"
import { Toolbar as MuiToolbar } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import Header from "components/Header"
import { FloatingSidebar } from "components/Sidebar"
import { useLocation } from "react-router-dom"

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
  padding: theme.spacing(2),
  overflowX: "hidden",
  height: "100%",
}))

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: theme.header.height,
}))

type MainLayoutProps = PropsWithChildren<{}>

export default function MainLayoutView(props: MainLayoutProps) {
  const { children } = props

  const { pathname } = useLocation()

  const isHomePage = pathname === "/"

  return (
    <Root>
      <CssBaseline />
      <Header transparent={isHomePage} />
      <FloatingSidebar />
      <MainContent>
        {isHomePage ? null : <Toolbar />}
        <Page>{children}</Page>
      </MainContent>
    </Root>
  )
}

export type MainLayoutType = FC<MainLayoutProps>

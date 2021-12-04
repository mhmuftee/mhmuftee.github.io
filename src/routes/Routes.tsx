import React from "react"

import { useMediaQuery, Theme } from "@mui/material"
import { MainLayout, MainLayoutType, Pages, PageDataType } from "pages"
import { Route, Routes } from "react-router-dom"
import { useAppDispatch } from "redux/hooks"
import { setSmallScreen } from "redux/reducers/ui/slice"

const childRoutes = (Layout: MainLayoutType, routes: PageDataType[]) =>
  routes.map(({ id, path, Component, header }) => (
    <Route
      key={id}
      path={path}
      element={
        <Layout header={header}>
          <Component />
        </Layout>
      }
    />
  ))

const AppRoutes = () => {
  const dispatch = useAppDispatch()
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  )

  React.useEffect(() => {
    dispatch(setSmallScreen(isSmallScreen))
  }, [dispatch, isSmallScreen])

  return <Routes>{childRoutes(MainLayout as MainLayoutType, Pages)}</Routes>
}

export default AppRoutes

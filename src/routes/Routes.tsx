import * as React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import {
  LandingPage,
  MainLayout,
  MainLayoutType,
  SideBarPages,
  PageDataType,
} from "pages"

const childRoutes = (Layout: MainLayoutType, routes: PageDataType[]) =>
  routes.map(({ id, path, Component }) => (
    <Route
      key={id}
      path={path}
      element={
        <Layout>
          <Component />
        </Layout>
      }
    />
  ))

const AppRoutes = () => (
  <Routes>
    {childRoutes(MainLayout as MainLayoutType, SideBarPages)}
    <Route path="/" element={<LandingPage />} />
    <Route path="/home" element={<Navigate replace to="/" />} />
  </Routes>
)

export default AppRoutes

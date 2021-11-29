import React from "react"

import { MainLayout, MainLayoutType, Pages, PageDataType } from "pages"
import { Route, Routes } from "react-router-dom"

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
  <Routes>{childRoutes(MainLayout as MainLayoutType, Pages)}</Routes>
)

export default AppRoutes

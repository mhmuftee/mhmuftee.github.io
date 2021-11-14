import * as React from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout, MainLayoutType, Pages, PageDataType } from "pages"

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

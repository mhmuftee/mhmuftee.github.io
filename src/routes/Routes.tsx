import React from "react"

import { Pages } from "pages"
import Layout from "pages/Layout"
import { Helmet } from "react-helmet-async"
import { Route, Routes } from "react-router-dom"

const AppRoutes = () => (
  <Routes>
    {Pages.map(({ id, path, title, Component }) => (
      <Route
        key={id}
        path={path}
        element={
          <Layout>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <Component />
          </Layout>
        }
      />
    ))}
  </Routes>
)

export default AppRoutes

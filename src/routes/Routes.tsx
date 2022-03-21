import React from "react"

import { routes } from "pages"
import Helmet from "pages/Helmet"
import Layout from "pages/Layout"
import { Route, Routes } from "react-router-dom"

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      {routes.map(({ path, Component, ...props }) => (
        <Route
          key={path}
          path={path}
          element={
            <>
              <Helmet {...props} />
              <Component />
            </>
          }
        />
      ))}
    </Route>
  </Routes>
)

export default AppRoutes

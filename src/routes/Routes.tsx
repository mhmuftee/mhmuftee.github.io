import React from "react"

import { routes } from "pages"
import Fallback from "pages/Fallback"
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
            <React.Suspense fallback={<Fallback />}>
              <Helmet {...props} />
              <Component />
            </React.Suspense>
          }
        />
      ))}
    </Route>
  </Routes>
)

export default AppRoutes

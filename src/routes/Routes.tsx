import React from "react"

import { MainLayout, Pages } from "pages"
import { Helmet } from "react-helmet-async"
import { Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <Routes>
      {Pages.map(({ id, path, title, Component }) => (
        <Route
          key={id}
          path={path}
          element={
            <MainLayout>
              <Helmet>
                <title>{`${title} - mhmuftee`}</title>
              </Helmet>
              <Component />
            </MainLayout>
          }
        />
      ))}
    </Routes>
  )
}

export default AppRoutes

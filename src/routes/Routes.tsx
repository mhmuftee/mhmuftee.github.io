import React from "react"

import { MainLayout, Pages } from "pages"
import { Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <Routes>
      {Pages.map(({ id, path, Component, header }) => (
        <Route
          key={id}
          path={path}
          element={
            <MainLayout header={header}>
              <Component />
            </MainLayout>
          }
        />
      ))}
    </Routes>
  )
}

export default AppRoutes

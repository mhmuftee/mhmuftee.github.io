import React from "react"

import { Pages } from "pages"
import Layout from "pages/Layout"
import { Route, Routes } from "react-router-dom"

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      {Pages.map(({ header, path, Component }) => (
        <Route key={header} path={path} element={<Component />} />
      ))}
    </Route>
  </Routes>
)

export default AppRoutes

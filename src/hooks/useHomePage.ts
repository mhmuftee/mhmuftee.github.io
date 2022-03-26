import { useMemo } from "react"

import { useLocation } from "react-router-dom"

export const useHomePage = (): boolean => {
  const { pathname } = useLocation()
  const isHomePage = useMemo(() => pathname === "/", [pathname])

  return isHomePage
}

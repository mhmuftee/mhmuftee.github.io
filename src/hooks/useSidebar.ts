import { useCallback, useLayoutEffect } from "react"

import { useLocalStorage } from "hooks/useLocalStorage"

export const useSidebar = (
  isHomePage: boolean,
  isSmallScreen: boolean
): [boolean, () => void] => {
  const [open, setOpen] = useLocalStorage("sidebaropen", false)

  const closeSideBar = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  useLayoutEffect(() => {
    setOpen(!isHomePage && !isSmallScreen)
  }, [isHomePage, isSmallScreen, setOpen])

  return [open, closeSideBar]
}

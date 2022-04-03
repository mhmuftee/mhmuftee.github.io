import { useEffect } from "react"

import { useHomePage } from "hooks/useHomePage"
import { useLocalStorage } from "hooks/useLocalStorage"
import { useSmallScreen } from "hooks/useSmallScreen"

export const useSidebar = (): boolean => {
  const [open, setOpen] = useLocalStorage("sidebaropen", false)

  const isHomePage = useHomePage()
  const isSmallScreen = useSmallScreen()

  useEffect(() => {
    const shouldOpen = !isHomePage && !isSmallScreen
    console.log(shouldOpen)
    setOpen(shouldOpen)
  }, [isHomePage, isSmallScreen, open, setOpen])

  return open
}

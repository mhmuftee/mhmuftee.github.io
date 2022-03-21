import { useCallback } from "react"

import { useLocalStorage } from "hooks/useLocalStorage"

export const useInfo = (): [
  title: string,
  setHeaderTitle: (s: string) => void
] => {
  const [title, setTitle] = useLocalStorage("header", "")

  const setHeaderTitle = useCallback(
    (t: string) => {
      setTitle(t)
    },
    [setTitle]
  )

  return [title, setHeaderTitle]
}

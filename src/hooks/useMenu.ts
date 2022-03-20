import { useCallback, useState } from "react"

export const useMenu = (): [boolean, () => void, () => void] => {
  const [open, setOpen] = useState(false)

  const handleMenuClick = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  const onClose = useCallback(() => {
    setOpen(false)
  }, [])

  return [open, handleMenuClick, onClose]
}

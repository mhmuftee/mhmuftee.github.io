/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react"

export const TitleContext = createContext({
  title: "",
  setHeaderTitle: (s: string) => {},
})

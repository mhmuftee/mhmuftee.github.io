import React, { useMemo, PropsWithChildren } from "react"

import { useInfo } from "hooks/useInfo"

import { TitleContext } from "./TitleContext"

const TitleContextProvider = (props: PropsWithChildren<{}>) => {
  const [title, setHeaderTitle] = useInfo()

  const value = useMemo(
    () => ({
      title,
      setHeaderTitle,
    }),
    [title, setHeaderTitle]
  )

  return (
    <TitleContext.Provider value={value}>
      {props.children}
    </TitleContext.Provider>
  )
}

export default TitleContextProvider

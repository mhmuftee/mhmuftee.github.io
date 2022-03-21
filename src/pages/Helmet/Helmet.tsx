import React, { useContext, useEffect } from "react"

import { Helmet as AsyncHelmet } from "react-helmet-async"
import { UIContext } from "ui"

type HelmetProps = {
  title: string
  header: string
}

const Helmet = (props: HelmetProps) => {
  const { title, header } = props
  const { setHeaderTitle } = useContext(UIContext)

  useEffect(() => {
    setHeaderTitle(header)
  }, [header, setHeaderTitle])

  return (
    <AsyncHelmet>
      <title>{title}</title>
    </AsyncHelmet>
  )
}

export default Helmet

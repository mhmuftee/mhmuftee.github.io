import * as React from "react"

import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />
})

export default Transition

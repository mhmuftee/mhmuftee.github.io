import React from "react"
import { Zoom } from "@mui/material"
import Tooltip, { TooltipProps } from "@mui/material/Tooltip"

const CustomTooltip = (props: TooltipProps) => (
  <Tooltip arrow TransitionComponent={Zoom} {...props} />
)

export default CustomTooltip

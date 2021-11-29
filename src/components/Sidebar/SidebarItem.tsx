import React from "react"

import { ListItem, ListItemIcon, ListItemText, SvgIcon } from "@mui/material"
import { NavLink, useLocation, matchPath } from "react-router-dom"

import Tooltip from "../Tooltip"

type NavItemProps = {
  text: string
  path: string
  icon: typeof SvgIcon
  showTooltip?: boolean
}

const ItemComponent = (props: NavItemProps) => {
  const { text, path: href, icon: Icon, showTooltip } = props
  const location = useLocation()

  const active = href ? !!matchPath(location.pathname, href) : false
  return (
    <Tooltip
      title={showTooltip ? text : ""}
      aria-label={text}
      placement="right-end"
    >
      <ListItem button component={NavLink} to={href} selected={active}>
        <ListItemIcon color="secondary">
          <Icon color="secondary" />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Tooltip>
  )
}

ItemComponent.defaultProps = {
  showTooltip: false,
}

export default ItemComponent

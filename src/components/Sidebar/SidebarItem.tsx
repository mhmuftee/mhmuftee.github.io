import React from "react"

import { ListItem, ListItemIcon, ListItemText, SvgIcon } from "@mui/material"
import { NavLink, useLocation, matchPath } from "react-router-dom"

type NavItemProps = {
  text: string
  path: string
  icon: typeof SvgIcon
}

const ItemComponent = (props: NavItemProps) => {
  const { text, path: href, icon: Icon } = props
  const location = useLocation()

  const active = href ? !!matchPath(location.pathname, href) : false
  return (
    <ListItem button component={NavLink} to={href} selected={active}>
      <ListItemIcon color="primary">
        <Icon color="primary" />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

ItemComponent.defaultProps = {
  showTooltip: false,
}

export default ItemComponent

import React from "react"

import {
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  SvgIcon,
  Theme,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { NavLink, useLocation, matchPath } from "react-router-dom"

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    padding: theme.spacing(0.5, 1),
  },
  icon: {
    minWidth: 35,
  },
  button: {
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    "& svg, svg g, span": {
      color: theme.palette.primary.main,
    },
  },
  buttonselected: {
    "&.Mui-selected": {
      background: theme.palette.primary.main,
      boxShadow: "2px 2px 5px rgb(0 0 0 / 20%)",
      "& svg, svg g, span": {
        color: theme.palette.getContrastText(theme.palette.primary.main),
      },
      "&:hover, &:focus": { background: theme.palette.primary.main },
    },
  },
}))

type NavItemProps = {
  title: string
  path: string
  Icon: typeof SvgIcon
}

const ItemComponent = (props: NavItemProps) => {
  const classes = useStyles()
  const { title, path, Icon } = props

  const location = useLocation()
  const active = path ? !!matchPath(location.pathname, path) : false

  return (
    <ListItem disablePadding className={classes.item} tabIndex={-1}>
      <ListItemButton
        component={NavLink}
        to={path}
        selected={active}
        classes={{ root: classes.button, selected: classes.buttonselected }}
      >
        <ListItemIcon className={classes.icon}>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  )
}

export default ItemComponent

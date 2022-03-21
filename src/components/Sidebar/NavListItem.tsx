import React, { useMemo } from "react"

import {
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Theme,
} from "@mui/material"
import ListItem, { ListItemProps } from "@mui/material/ListItem"
import { makeStyles } from "@mui/styles"
import { NavLink, useLocation, matchPath } from "react-router-dom"
import { SvgIcon } from "types"

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    padding: theme.spacing(0.5, 1),
  },
  icon: {
    minWidth: 40,
  },
  button: {
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    "& svg, svg g, span": {
      color: theme.palette.primary.main,
    },
    "&:hover, &:focus": {
      "& svg, svg g, span": {
        color: theme.palette.getContrastText(theme.palette.primary.main),
      },
    },
    "&.Mui-selected": {
      background: theme.palette.primary.main,
      boxShadow: "2px 2px 5px rgb(0 0 0 / 20%)",
      "& svg, svg g, span": {
        color: theme.palette.getContrastText(theme.palette.primary.main),
      },
      "&:hover, &:focus": {
        background: theme.palette.primary.main,
      },
    },
  },
}))

interface NavListItemProps extends ListItemProps {
  header: string
  path: string
  Icon: SvgIcon
}

const NavListItem = (props: NavListItemProps) => {
  const classes = useStyles()
  const { header, title, path, Icon } = props

  const { pathname } = useLocation()
  const active = useMemo(() => !!matchPath(pathname, path), [pathname, path])

  return (
    <ListItem disablePadding tabIndex={-1} className={classes.item}>
      <ListItemButton
        to={path}
        component={NavLink}
        state={{ header, title }}
        selected={active}
        classes={{ root: classes.button }}
      >
        <ListItemIcon className={classes.icon}>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={header} />
      </ListItemButton>
    </ListItem>
  )
}

export default NavListItem

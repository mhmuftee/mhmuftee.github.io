import React from "react"

import { ListItem, ListItemButton, ListItemText, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { NavLink } from "react-router-dom"
import { SvgIcon } from "types"

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    "& svg, svg g, span": {
      color: theme.palette.primary.main,
    },
    "&:hover, &:focus": {
      background: theme.palette.primary.main,
      boxShadow: "2px 2px 5px rgb(0 0 0 / 20%)",
      "& svg, svg g, span": {
        color: theme.palette.getContrastText(theme.palette.primary.main),
      },
    },
  },
}))

interface NavListItemProps {
  header: string
  path: string
  Icon: SvgIcon
  onClick?: () => void
}

const NavListItem = (props: NavListItemProps) => {
  const classes = useStyles()
  const { header, path, onClick } = props

  return (
    <ListItem disablePadding tabIndex={-1}>
      <ListItemButton
        dense
        to={path}
        component={NavLink}
        state={{ header }}
        onClick={onClick}
        classes={{ root: classes.button }}
      >
        <ListItemText
          primary={header}
          primaryTypographyProps={{ align: "center", variant: "h4" }}
        />
      </ListItemButton>
    </ListItem>
  )
}

export default NavListItem

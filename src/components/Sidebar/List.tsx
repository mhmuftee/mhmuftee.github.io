import * as React from "react"

import {
  List,
  ListItem,
  ListItemIcon as MuiListItemIcon,
  ListItemButton as MuiListItemButton,
  ListItemText as MuiListItemText,
  Theme,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import { Pages } from "pages"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
  },
}))

const ListItemIcon = styled(MuiListItemIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
}))

const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  padding: 0,
  borderRadius: theme.spacing(2),
  "&:hover": {
    background: theme.palette.primary.main,
  },
}))

const ListItemText = styled(MuiListItemText)(({ theme }) => ({
  margin: theme.spacing(0),
  padding: theme.spacing(1),
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
}))

interface Props {
  showIcon?: boolean
  handleClose?: () => void
}

const MenuItems = (props: Props) => {
  const { showIcon, handleClose } = props
  const classes = useStyles()
  return (
    <List sx={{ p: 2 }}>
      {Pages.map(({ path, header: text, icon: Icon }) => (
        <ListItem disablePadding component={NavLink} to={path} key={path}>
          <ListItemButton onClick={handleClose} dense>
            {showIcon && (
              <ListItemIcon>
                <Icon className={classes.icon} />
              </ListItemIcon>
            )}
            <ListItemText
              primary={text}
              primaryTypographyProps={{ align: "center", variant: "h4" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default MenuItems

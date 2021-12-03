import * as React from "react"

import {
  Dialog,
  Paper as MuiPaper,
  List,
  ListItem,
  ListItemButton as MuiListItemButton,
  ListItemText as MuiListItemText,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import Header from "components/Header"
import { Pages } from "pages"
import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import {
  selectOpenMenu,
  selectSmallScreen,
  closeMenu,
} from "redux/reducers/ui/slice"

const BigPaper = styled(MuiPaper)(({ theme }) => ({
  background: theme.palette.background.body,
}))

const SmallPaper = styled(MuiPaper)(({ theme }) => ({
  background: theme.palette.background.body,
  alignContent: "center",
  justifyContent: "center",
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

const DialogMenu = () => {
  const dispatch = useAppDispatch()
  const open = useAppSelector(selectOpenMenu)
  const isSmallScreen = useAppSelector(selectSmallScreen)

  const Paper = isSmallScreen ? SmallPaper : BigPaper

  const handleClose = () => {
    dispatch(closeMenu())
  }

  return (
    <Dialog
      onClose={handleClose}
      fullScreen={isSmallScreen}
      open={open}
      fullWidth={true}
      maxWidth="md"
      PaperComponent={Paper}
      transitionDuration={1000}
    >
      <Header ishomepage={true} />
      <List sx={{ p: 2 }}>
        {Pages.map(({ path, header: text }) => (
          <ListItem disablePadding component={NavLink} to={path} key={path}>
            <ListItemButton onClick={handleClose} dense>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ align: "center", variant: "h3" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default DialogMenu
